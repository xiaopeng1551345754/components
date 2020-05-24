<template>
  <router-view></router-view>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  ready: function() {},
  beforeDestroy: function() {},
  methods: {}
};
</script>
import 
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
// 公共滚动条样式
.common-scrollbar {
  &::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 28px;
    background:rgba(0,0,0,0.45);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background:rgba(0,0,0,0.45);
  }
  &::-webkit-scrollbar-corner {
    background:rgba(0,0,0,0.45);
    // background: rgba(216, 216, 216, 1);
  }
}
</style>
