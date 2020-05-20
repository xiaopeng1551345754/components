<template>
  <div class="hex-pickerarea">
      
  </div>
</template>
<script>
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "pickerarea",
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
      type: String,
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
