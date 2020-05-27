<template>
  <div class="hex-cate" @mouseleave="mouseLeave" v-click-out-side='hiddenMenu' :class='{"oh":level!==1,"sd":selectedFirst,"onlyOne":level===1}'>
    <!-- level：1 只有一级菜单 -->
    <template v-if="level===1">
      <div class="first-menu common-scrollbar">
        <a
          href="javascript:;"
          v-for="item in list"
          :key="item.id"
          track-by="$index"
          @click="selectLinkMenu(item, 1)"
          class="menu-item"
          :class="{'menu-item':true,'selected':firstMenu.id === item.id}"
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
          :class="{'menu-item':true,'selected':firstMenu.id === item.id}"
        >{{item.name | subStringName}}</a>
      </div>
      <div class="second-menu common-scrollbar" v-if="selectedFirst">
        <div class="menu-content">
          <a
            href="javascript:;"
            :class="{'menu-item':true,'selected':secMenu.id === item.id}"
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
          :class="{'menu-item':true,'selected':firstMenu.id === item.id}"
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
                :class="{'menu-item':true,'selected':thiMenu.id ===item.id}"
                @click="selectLinkMenu(item, second)"
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
    list: {
      type: Array,
      default() {
        return []
      }
    },
    level: {
      type: Number,
      default: 1
    },
    eventType: {
      type: String,
      default: "click"
    }
  },
  data() {
    return {
      selectedFirst: true, // 是否选中一级栏目
      secondList: [],
      firstMenu: {},
      secMenu: {},
      thiMenu: {}
    };
  },
  filters: {
    subStringName: value => {
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
      this.list.forEach((element, index) => {
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
          this.secMenu = data[1]
          //三级菜单
          let sItem = fItem.children[sIndex];
          if (data[2] && sItem.children) {
            let tid = data[2].id || -1;
            this.setSelected(sItem.children, tid);
            this.thiMenu = data[2]
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
      this.firstMenu = item
      let menu = this.list[index];
      menu.selected = true;
      this.list.$set(index, menu);
      this.secondList = menu.children;
    },
    selectLinkMenu(item, second) {
      if (second) {
        this.secMenu = second
        this.thiMenu = item
      } else {
        this.secMenu =item
      }
      if (second === 1) {
        this.firstMenu = item
      }
      item.selected = true
      this.$emit("select", item, second, this.firstMenu);
      this.reset();
    },
    reset() {
      let that = this;
      let list = this.list;
      list.forEach((element, index) => {
        element.selected = false;
        that.list.$set(index, element);
      });
      // this.selectedFirst = false;
    },
    mouseLeave() {
      if (this.eventType === "hover") this.reset();
    },
    hiddenMenu () {
      this.$emit("clickoutside")
      this.reset();
    }
  }
};
</script>
<style lang="less" scoped>
.hex-cate {
  width: 538px;
  height: 400px;
  display: flex;
  &.oh {
    overflow: hidden;
    border-radius:0px 0px 8px 8px;

  }
  &.sd {
    box-shadow:0px 3px 8px 0px rgba(0,0,0,0.31);
  }
  &.onlyOne {
    width: 118px;
  }
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
    overflow-y: auto;
    background: #F1F1F1;
    &::-webkit-scrollbar {
      background: rgba(0,0,0,0);
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background:rgba(216,216,216,1);
      border-radius:2px;
      width: 4px;
    }
    .menu-item {
      padding: 14px 0 ;
      line-height: 18px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.64);
      &.selected {
        background: rgba(255, 255, 255, 1);
        color: #014BC9;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 18px;
          background:  #014BC9;
        }
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
    background: #fff;
    border-left: none;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 4px;
      background: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
      background:rgba(216,216,216,1);
      border-radius:2px;
      width: 4px;
    }
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
        padding: 4px 14px;
        width: 92px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 7px;
        &:hover {
          font-weight: 400;
          color: #014BC9;
        }
        &.selected {
          font-weight: 400;
          color: #014BC9;
          background: rgba(127,219,255,0.2);
          border-radius:4px;
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
        border-bottom: 1px solid #ebebeb;
        padding: 17px 0px 11px;
      }
      .title {
        width: 90px;
        margin-right: 11px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        clear: both;
        overflow: hidden;
        padding-top: 2px;
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
        width: 92px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 300;
        height: auto;
        line-height: inherit;
      }
    }
  }
}
</style>
