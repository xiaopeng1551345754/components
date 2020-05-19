<template>
  <div class="hex-waterfall">
    <vue-waterfall
      :imgs-arr="list"
      @scroll-bottom="scrollBottom"
      @click="selectItem"
      :gap="14"
      :max-cols="4"
    >
    </vue-waterfall>
  </div>
</template>
<script>
import clickOutSide from "../../directives/clickoutside.js";
import vueWaterfall from './vue-waterfall'
export default {
  name: "waterfall",
  components: {
    vueWaterfall
  },
  directives: {
    clickOutSide
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    loadingImg: {
      type: "",
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  ready() {
  },
  methods: {
    // init waterfall instance
    init() {

    },
    scrollBottom() {
      this.$emit("scroll-bottom");
    },
    selectItem(e,item) {
      this.$emit("select-item", item);
    }
  }
};
</script>
<style lang="less">
.hex-waterfall{
  height: 100%;
  background:rgba(244,244,244,1);
}
</style>
