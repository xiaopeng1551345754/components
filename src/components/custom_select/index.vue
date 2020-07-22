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
        <img src="data:image/png;base64,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"
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
