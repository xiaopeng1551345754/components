<template>
  <div :class="{'hex-area':true,'show':show}" :style="{width:inputWidth}">
    <div class="section">
      <div class="title">国家列表</div>
      <div class="content common-scrollbar">
        <div
          v-for="item in contries"
          :key="item.id"
          track-by="$index"
          :class="{'item':true,'selected':item.selected}"
          @click="selectNode('country',item,$index)"
        >
          <a href="javascript:;">{{item.name}}</a>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">省份列表</div>
      <div class="content common-scrollbar">
        <div
          v-for="item in provinces"
          :key="item.id"
          track-by="$index"
          :class="{'item':true,'selected':item.selected}"
          @click="selectNode('provice',item,$index)"
        >
          <a href="javascript:;">{{item.name}}</a>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">市级列表</div>
      <div class="content common-scrollbar">
        <div
          v-for="item in cities"
          :key="item.id"
          track-by="$index"
          :class="{'item':true,'selected':item.selected}"
          @click="selectNode('city',item,$index)"
        >
          <a href="javascript:;">{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { throttle } from '../../utils/dom'
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "area",
  directives: {
    clickOutSide
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    inputWidth: {
      type: String,
      default: "468px"
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      contries: [],
      provinces: [],
      cities: []
    };
  },
  watch: {
    show(newVal) {
      if (newVal === false) {
        // 关闭时重置
        this.reset();
      }
    }
  },
  computed: {},
  ready() {},
  methods: {
    // init waterfall instance
    init() {},
    // 设置国家列表
    setContries(list) {
      this.contries = list;
    },
    // 设置省份列表
    setProvinces(id, list) {
      this.cities = [];
      this.provinces = list;
    },
    // 设置市级列表
    setCities(id, list) {
      this.cities = list;
    },
    // 选中列表节点
    selectNode(from, data, index) {
      if (from === "country") {
        this.clearContries();
        this.contries.$set(index, Object.assign({}, data, { selected: true }));
      } else if (from === "provice") {
        this.clearProvinces();
        this.provinces.$set(index, Object.assign({}, data, { selected: true }));
      } else if (from === "city") {
      }
      this.$emit("select-node", from, data, index);
    },
    // 清除国家列表选中状态
    clearContries() {
      let that = this;
      this.contries.forEach((element, index) => {
        element.selected = false;
        that.contries.$set(index, element);
      });
    },
    // 清除省份列表选中状态
    clearProvinces() {
      let that = this;
      this.provinces.forEach((element, index) => {
        element.selected = false;
        that.provinces.$set(index, element);
      });
    },
    // 清除市级列表选中状态
    clearCities() {
      let that = this;
      this.cities.forEach((element, index) => {
        element.selected = false;
        that.cities.$set(index, element);
      });
    },
    // 重置列表
    reset() {
      this.clearContries();
      this.clearProvinces();
      this.clearCities();
      this.provinces = [];
      this.cities = [];
    }
  }
};
</script>
<style lang="less">
.hex-area {
  height: 0px;
  overflow: hidden;
  display: flex;
  transition: 0.3s ease-in;
  * {
    box-sizing: border-box;
  }
  &.show {
    height: 232px;
  }
  .section {
    flex: 1;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    .title {
      padding: 0px 15px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    .content {
      height: 192px;
      overflow: auto;
      .item {
        line-height: 32px;
        padding: 0px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.selected {
          background: rgba(230, 247, 255, 1);
        }
        &:hover {
          background: rgba(230, 247, 255, 1);
        }
        a {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          display: block;
          text-decoration: none;
        }
      }
    }
  }
}

</style>
