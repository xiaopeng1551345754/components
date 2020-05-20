<template>
  <div class="hex-cate">
    <div class="first-menu">
      <a
        href="javascript:;"
        v-for="item in menuList"
        :key="item.id"
        track-by="$index"
        @click="selectFirstMenu(item,$index)"
        :class="{'menu-item':true,'selected':item.selected}"
      >{{item.name}}</a>
    </div>
    <!-- 未选中二级栏目的状态 -->
    <div class="second-menu" v-if="selectedFirst&&!selectedSecond">
      <div class="menu-content">
        <a
          href="javascript:;"
          class="menu-item"
          v-for="item in secondList"
          :key="item.id"
          track-by="$index"
          @click="selectSecondMenu(item,$index)"
        >{{item.name}}</a>
      </div>
    </div>
    <!-- 选中二级栏目的状态 -->
    <div class="third-menu" v-if="selectedSecond">
      <div class="menu-content">
        <div class="third-item" v-for="second in secondList" :key="second.id" track-by="$index">
          <div class="title">
            <span class="content">{{second.name}}</span>：
          </div>
          <div class="list">
            <a
              href="javascript:;"
              class="menu-item"
              v-for="item in second.children"
              :key="item.id"
              track-by="$index"
              @click="selectThirdMenu(item,$index)"
            >{{item.name}}</a>
          </div>
        </div>
      </div>
    </div>
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
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      selectedFirst: false, // 是否选中一级栏目
      selectedSecond: false, // 是否选中二级栏目
      secondList: []
    };
  },
  watch: {},
  computed: {},
  ready() {},
  methods: {
    // init waterfall instance
    init() {},
    selectFirstMenu(item, index) {
      this.reset();
      this.$nextTick(() => {
        this.selectedFirst = true;
        let menu = this.menuList[index];
        menu.selected = true;
        this.menuList.$set(index, menu);
        this.secondList = menu.children;
      });
    },
    selectSecondMenu(item, index) {
      this.selectedSecond = true;
    },
    selectThirdMenu(item, index) {
      this.$emit("select", item);
      this.reset();
    },
    reset() {
      let that = this;
      let menuList = this.menuList
      menuList.forEach((element, index) => {
        element.selected = false;
        that.menuList.$set(index, element);
      });
      // this.$set(data, 'menuList', menuList)
      this.selectedFirst = false;
      this.selectedSecond = false;
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
    height: 44px;
    line-height: 44px;
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
      text-align: center;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.64);
      &.selected {
        color: rgba(0, 142, 255, 1);
        background: rgba(0, 0, 0, 0.2);
      }
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
      padding: 0px 10px;
    }
    .menu-item {
      float: left;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      margin-right: 20px;
      &:hover {
        color: rgba(0, 142, 255, 1);
      }
    }
  }
  .third-menu {
    .menu-content {
      .third-item {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #979797;
        padding: 11px 0px;
      }
      .title {
        padding: 0px 5px;
        margin-right: 10px;
        color: rgba(0, 0, 0, 0.45);
        clear: both;
        overflow: hidden;
        .content {
          float: left;
          width: 90px;
          // display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .list {
        flex: 1;
        .menu-item {
          height: auto;
          line-height: inherit;
        }
      }
    }
  }
}
</style>
