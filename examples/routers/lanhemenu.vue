<template>
  <div class="wrap">
    <lanhemenu
      class="menu"
      :list="list"
      :default-active="defaultActive"
      :disabled="disabled"
      @select='select'
      @scrollt='scroll'
    >
    </lanhemenu>
  </div>
</template>

<script>
import data from "../datas/cardmenu.js";
export default {
  data() {
    return {
      list: [],
      defaultActive: 0,
      disabled: false,
    };
  },
  methods: {
    select(item, card) {
      console.log(item, card, item.name, card.name);
    },
    scroll(st) {
      console.log(st);
    },
  },
  ready() {
    setTimeout(() => {
      let arr = [];
      for (let i = 10; i--; ) {
        let obj = {
          _id: i,
          name: `一级${i}`,
          children: [],
        };
        for (let j = 10; j--; ) {
          let chi = {
            _id: i,
            name: `一级${i}二级${j}`,
            desc: `一级${i}二级${j}一级${i}二级${j}一级${i}二级${j}一级${i}二级${j}一级${i}二级${j}一级${i}二级${j}一级${i}二级${j}`,
          };
          obj.children.push(chi);
        }
        arr.push(obj);
      }
      this.list = arr;
    });
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 375px;
  height: 560px;
  position: fixed;
  bottom: 0;
  .menu {
    left: 0;
    bottom: 0;
  }
}
</style>
