<template>
  <div>
    <div
      class="hex-cate flex flex-row"
      @mouseleave="mouseLeave"
      v-click-out-side="hiddenMenu"
      :class="{'oh': level !== 1, 'sd': selectedFirst}"
    >
      <div class="first-menu flex flex-column" v-if="level===3">
        <a
          href="javascript:;"
          v-for="item in list"
          :key="item.id"
          track-by="$index"
          @click="selectLinkMenu(item,2)"
          :class="{'menu-item':true,'selected':firstItem.id === item.id}"
        >{{item.name | subStringName}}</a>
      </div>

      <div
        class="first-menu flex flex-column"
        v-if="level > 1 && firstItem.children && firstItem.children.length"
      >
        <a
          href="javascript:;"
          v-for="second in firstItem.children"
          :key="second.id"
          track-by="$index"
          @click="selectLinkMenu(second,1)"
          :class="{'menu-item':true,'selected':secondItem.id === second.id}"
        >{{second.name | subStringName}}</a>
      </div>

      <div class="second-menu flex1" v-if="secondItem.children && secondItem.children.length">
        <a
          href="javascript:;"
          v-for="item in secondItem.children"
          :key="item.id"
          track-by="$index"
          :class="{'menu-item':true,'selected':defaultChosedArr.includes(item.id)}"
          @click="selectLinkMenu(item)"
        >{{item.name | subStringName}}</a>
      </div>
    </div>
    <p>选中结果： {{resultString}}</p>
  </div>
</template>
<script>
// import { throttle } from '../../utils/dom'
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "r3checked",
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
        return [];
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
      defaultChosedArr: [],//选中元素id数组
      firstItem: {},//第二级元素
      secondItem: {},//第三级元素
      resultString: '',//选中结果
    };
  },
  filters: {
    subStringName: value => {
      return value.length > 30 ? `${value.substring(0, 30)}...` : value;
    }
  },
  computed: {},
  ready() {
    this.defaultChosedArr = this.defaultData.map((item) => {
      this.resultString += this.resultString ? ('/' + item.name) : item.name
      return item.id
    });
    this.levelLogic();
  },
  methods: {
    levelLogic() {
      this.firstItem = this.list[0]; this.secondItem = this.firstItem.children[0];
      switch (this.level) {
        case 2: this.firstItem = { children: this.list }; this.secondItem = this.list[0]; break;
        case 3: this.firstItem = this.list[0]; this.secondItem = this.firstItem.children[0]; break;
        default: this.secondItem = { children: this.list }; break;
      }
    },

    selectLinkMenu(item, level) {
      switch (level) {
        case 1: this.secondItem = item; break;
        case 2: this.firstItem = item; this.secondItem = this.firstItem.children[0]; break;
        default: this.chose(item.id, item.name); break;
      }
    },

    // 多状态选择 
    chose(id, name) {
      let index = this.defaultChosedArr.indexOf(id);
      if (index > -1) {
        this.defaultChosedArr.splice(index, 1)
        let string = this.resultString;
        string = string.replace('/' + name, '')
        string = string.replace(name + '/', '')
        this.resultString = string.replace(name, '')
      } else {
        this.defaultChosedArr.push(id);
        this.resultString += this.resultString ? ('/' + name) : name;
      }
    },
    // 重置 
    reset() {
      this.defaultChosedArr = [];
      switch (this.level) {
        case 2: this.secondItem = this.list[0]; break;
        case 3: this.firstItem = this.list[0]; this.secondItem = this.firstItem.children[0]; break;
        default:
          break;
      }
    },

    mouseLeave() {
      if (this.eventType === "hover") this.reset();
    },

    hiddenMenu() {
      this.$emit("clickoutside");
      this.reset();
    }
  }
};
</script>
<style lang="less" scoped>
.hex-cate {
  width: 538px;
  height: 400px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.31);
  &.oh {
    overflow: hidden;
    border-radius: 0px 0px 8px 8px;
  }
  .menu-item {
    text-decoration: none;
    cursor: pointer;
  }

  .first-menu {
    width: 118px;
    height: 100%;
    overflow-y: auto;
    background: #f1f1f1;
    .menu-item {
      padding: 14px 0;
      line-height: 18px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.64);
      &.selected {
        background: rgba(255, 255, 255, 1);
        color: #014bc9;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 18px;
          background: #014bc9;
        }
      }
    }
  }
  .second-menu {
    flex-wrap: wrap;
    height: 100%;
    background: #fff;
    overflow-y: auto;
    .menu-item {
      display: inline-block;
      margin-top: 7px;
      height: 40px;
      line-height: 32px;
      margin-left: 4px;
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
        color: #014bc9;
      }
      &.selected {
        color: #014bc9;
        background: rgba(127, 219, 255, 0.2);
        border-radius: 4px;
      }
    }
  }
}
</style>
