<template>
  <div class="wrap"
       v-click-out-side="blur">
    <div class="search">
      <input type="text"
             v-model="search"
             :placeholder="placeholder"
             class="search-input"
             @focus="focus" />
      <div class="del-icon"
           v-show="search && showDel"
           @click.stop="clearvalue">
        <img src="./img/del.png"
             alt="">
      </div>
      <div class="arrow-icon"
           :class="{
             active: active,
             'arrow': search && showDel
            }"></div>
    </div>
    <div class="items"
         v-show="active">
      <div class="item"
           v-for="(idx, item) in filterSearch"
           :key="idx"
           :value="item[value]"
           :class="{ selected: item[value] === selected[value] }"
           @click="select(item)">
        {{ item[key] }}
      </div>
    </div>
  </div>
</template>

<script>
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "customselect",
  props: {
    list: {
      type: Array,
      default () {
        return [];
      },
    },
    search: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入关键词",
    },
    key: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "value",
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    selected: {
      type: Object,
      default () {
        return {};
      },
    },
    showDel: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      active: false
    };
  },
  computed: {
    filterSearch () {
      let arr = this.list.filter(
        (item) =>
          item[this.key] && (item[this.key] + "").indexOf(this.search) !== -1
      );
      return arr;
    },
  },
  methods: {
    select (item) {
      this.selected = item;
      this.search = item[this.key] + "";
      this.$emit("select");
      this.blur();
    },
    focus () {
      this.active = true;
    },
    blur () {
      this.active = false;
    },
    clearvalue () {
      this.search = '';
    }
  },
  watch: {
    search (n) {
      this.$emit("search", n);
    },
  },
  directives: {
    clickOutSide,
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .search {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    &:hover .del-icon {
      display: block;
    }
    &:hover .arrow {
      display: none;
    }
    .del-icon {
      position: absolute;
      right: 11px;
      top: 50%;
      transform: translateY(-40%);
      display: none;
      img {
        width: 15px;
        height: 15px;
      }
    }
    .arrow {
      display: block;
    }
    .arrow-icon {
      &.active {
        &::before {
          transform: translateY(-30%) rotate(45deg);
        }
      }
      &::before {
        content: "";
        width: 6px;
        height: 6px;
        border: 1px solid gray;
        border-right: none;
        border-bottom: none;
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-100%) rotate(-135deg);
        z-index: 1;
        transition: 0.2s;
      }
    }
    .search-input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      outline: none;
      border: 1px solid #d7dde4;
      border-radius: 4px;
      padding: 0 24px 0 16px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 32px;
      color: #657180;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        border-color: #ed6a00;
      }
      &:focus {
        border-color: #ed6a00;
        box-shadow: 0 0 0 2px rgba(237, 106, 0, 0.2);
      }
    }
  }
  .items {
    position: absolute;
    top: 100%;
    left: 0;
    margin: 4px 0;
    width: 100%;
    max-height: 400%;
    overflow: auto;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;
      color: #262626;
      &.selected {
        background: #fafafa;
        font-weight: 700;
      }
      &:hover {
        background: rgba(237, 106, 0, 0.2);
      }
    }
  }
}
</style>
