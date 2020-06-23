<template>
  <div class="wrap">
    <accordion
      :data="data"
      :default-active="defaultActive"
      :min-height="minHeight"
      :max-height="maxHeight"
      @select='select'
    >
    </accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      defaultActive: '8',
      minHeight: 240,
      maxHeight: 375
    };
  },
  methods: {
    select (item) {
      console.log(item.id)
    }
  },
  ready() {
    for (let i = 10; i--; ) {
      this.data.push({
        id: i + "",
        src:
          "http://img0.imgtn.bdimg.com/it/u=151472226,3497652000&fm=26&gp=0.jpg",
      });
    }
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 375px;
  margin: auto;
}
</style>
