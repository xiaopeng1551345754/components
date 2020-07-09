<template>
  <div class="screen">
    <div class="content">
      <div class="wrap">
        <imgscroll
          :list="list"
          :default-rem="defaultRem"
          :change-rem="changeRem"
          :start-change="startChange"
          @select="select"
        ></imgscroll>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      data: {
        boxArr: [], // 各个盒子的位置高度信息
      },
      defaultRem: 0, // 初始的rem
      changeRem: 5, // 要变化的rem距离
      startChange: 0.5, // 并不是盒子刚刚触碰顶部，就开始修改背景图位置，而是到了盒子某个位置时，这个是
    };
  },
  methods: {
    select(img) {
      console.log(img);
    },
  },
  ready() {
    setTimeout(() => {
      for (let i = 10; i--; ) {
        this.list.push({
          img:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg",
        });
      }
    });
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.screen {
  overflow: auto;
  height: 100vh;
  .content {
    height: auto;
    background: green;
    padding-top: 50vh;
  }
}
</style>
