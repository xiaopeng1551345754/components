<template>
  <div class="hex-cate" @mouseleave="mouseLeave">
    <!-- level：1 只有一级菜单 -->
    <template v-if="level===1">
      <div class="first-menu common-scrollbar">
        <a
          href="javascript:;"
          v-for="item in list"
          :key="item.id"
          track-by="$index"
          @click="selectLinkMenu(item)"
          class="menu-item"
        >{{item.name | subStringName}}</a>
      </div>
    </template>
    <!-- level：2 只有二级菜单 -->
    <template v-if="level===2">
      <div class="first-menu common-scrollbar">
        <a
          href="javascript:;"
          v-for="item in list"
          :key="item.id"
          track-by="$index"
          @click="selectFirstMenu('click',item,$index)"
          @mouseover="selectFirstMenu('hover',item,$index)"
          :class="{'menu-item':true,'selected':item.selected}"
        >{{item.name | subStringName}}</a>
      </div>
      <div class="second-menu common-scrollbar" v-if="selectedFirst">
        <div class="menu-content">
          <a
            href="javascript:;"
            :class="{'menu-item':true,'selected':item.selected}"
            v-for="item in secondList"
            :key="item.id"
            track-by="$index"
            @click="selectLinkMenu(item)"
          >{{item.name | subStringName}}</a>
        </div>
      </div>
    </template>
    <!-- level：3 含有三级菜单 -->
    <template v-if="level===3">
      <div class="first-menu common-scrollbar">
        <a
          href="javascript:;"
          v-for="item in list"
          :key="item.id"
          track-by="$index"
          @click="selectFirstMenu('click',item,$index)"
          @mouseover="selectFirstMenu('hover',item,$index)"
          :class="{'menu-item':true,'selected':item.selected}"
        >{{item.name | subStringName}}</a>
      </div>
      <div class="third-menu common-scrollbar" v-if="selectedFirst">
        <div class="menu-content">
          <div class="third-item" v-for="second in secondList" :key="second.id" track-by="$index">
            <div class="title">
              <span class="name-content">{{second.name}}</span>:
            </div>
            <div class="list">
              <a
                href="javascript:;"
                v-for="item in second.children"
                :key="item.id"
                track-by="$index"
                :class="{'menu-item':true,'selected':item.selected}"
                @click="selectLinkMenu(item)"
              >{{item.name | subStringName}}</a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
// import { throttle } from '../../utils/dom'
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "navCate",
  directives: {
    clickOutSide
  },
  props: {
    defaultData: {
      type: Array,
      default() {
        return [];
      }
    },
    menuList: {
      type: Object,
      default() {
        return {};
      }
    },
    eventType: {
      type: String,
      default: "click"
    }
  },
  data() {
    return {
      level: 1,
      list: [],
      selectedFirst: false, // 是否选中一级栏目
      secondList: []
    };
  },
  filters: {
    subStringName: value => {
      console.log(value);
      return value.length > 6 ? `${value.substring(0, 6)}...` : value;
    }
  },
  computed: {},
  ready() {
    this.init();
  },
  methods: {
    // init waterfall instance
    init() {
      let that = this;
      // 处理menulist格式
      this.level = this.menuList.level;
      let list = this.menuList.list;
      list.forEach((element, index) => {
        that.list.$set(index, Object.assign({}, element, { selected: false }));
      });
      // 设置默认值
      this.setDefaultData();
    },
    setDefaultData() {
      if (this.defaultData.length <= 0) return false;
      let that = this;
      let data = this.defaultData;
      let fid = data[0].id || -1;
      let fIndex = this.setSelected(this.list, fid);
      if (fIndex > -1) {
        // 选中一级菜单
        this.selectFirstMenu(this.eventType, this.list[fIndex], fIndex);
        //二级菜单
        let fItem = this.list[fIndex];
        if (data[1] && fItem.children) {
          let sid = data[1].id || -1;
          let sIndex = this.setSelected(fItem.children, sid);
          //三级菜单
          let sItem = fItem.children[sIndex];
          if (data[2] && sItem.children) {
            let tid = data[2].id || -1;
            this.setSelected(sItem.children, tid);
          }
        }
      }
    },
    setSelected(list, id) {
      // 循环设置menulist数据
      let resultIndex = -1;
      list.forEach((element, index) => {
        if (element.id === id) {
          list.$set(index, Object.assign({}, element, { selected: true }));
          resultIndex = index;
        }
      });
      return resultIndex;
    },
    selectFirstMenu(type, item, index) {
      if (type != this.eventType) return false;
      this.reset();
      this.selectedFirst = true;
      let menu = this.list[index];
      menu.selected = true;
      this.list.$set(index, menu);
      this.secondList = menu.children;
    },
    selectLinkMenu(item) {
      this.$emit("select", item);
      this.reset();
    },
    reset() {
      let that = this;
      let list = this.list;
      list.forEach((element, index) => {
        element.selected = false;
        that.list.$set(index, element);
      });
      this.selectedFirst = false;
    },
    mouseLeave() {
      if (this.eventType === "hover") this.reset();
    }
  }
};
</script>
<style lang="less" scoped>
.hex-cate {
  width: 538px;
  height: 400px;
  display: flex;
  * {
    box-sizing: border-box;
  }
  .menu-item {
    display: block;
    text-decoration: none;
  }
  .first-menu {
    float: left;
    width: 118px;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(186, 186, 186, 1);
    overflow-y: auto;
    .menu-item {
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.64);
      &.selected {
        color: rgba(0, 142, 255, 1);
        background: rgba(0, 0, 0, 0.2);
      }
    }
    .first-box {
      position: relative;
    }
  }
  .second-menu,
  .third-menu {
    float: left;
    width: 420px;
    height: 100%;
    background: rgba(235, 235, 235, 1);
    border: 1px solid rgba(186, 186, 186, 1);
    border-left: none;
    overflow-y: auto;
    .menu-content {
      padding-top: 11px;
      padding-left: 23px;
      overflow: hidden;
      .menu-item {
        line-height: 22px;
        float: left;
        font-size: 16px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.85);
        margin-right: 25px;
        margin-bottom: 17px;
        &:hover {
          font-weight: 400;
          color: rgba(0, 142, 255, 1);
        }
        &.selected {
          font-weight: 400;
          color: rgba(0, 142, 255, 1);
        }
      }
    }
  }
  .third-menu {
    .menu-content {
      padding-top: 0px;
      padding-left: 12px;
      padding-right: 18px;
      .third-item {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #979797;
        padding: 17px 0px 11px;
      }
      .title {
        width: 90px;
        margin-right: 11px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        clear: both;
        overflow: hidden;
        .name-content {
          float: left;
          width: 84px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .list {
        flex: 1;
      }
      .menu-item {
        font-weight: 300;
        margin-right: 32px;
        margin-bottom: 6px;
        height: auto;
        line-height: inherit;
      }
    }
  }
}
</style>
