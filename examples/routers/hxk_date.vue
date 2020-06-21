<template>
  <div class="content">
    <div class="wrap">
      <hxkdate
        :start="start"
        :end="end"
        :multiple="multiple"
        :selected-color="selectedColor"
        :none-text="noneText"
        :show-list="showList"
        :default="defaults"
        :best-disabled='false'
        :bottom-text='false'
        :select-shape='"circle"'
        :filter-default='false'
        @selected='selected'
      >
      </hxkdate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: "2020-6",
      end: "2021-2",
      multiple: false,
      selectedColor: "red",
      noneText: "",
      showList: [],
      defaults: [],
    };
  },
  methods: {
    selected (arr) {
      console.log(arr)
      arr.map(item=>{
        console.log(item.time)
      })
    }
  },
  ready () {
    setTimeout(()=>{
      this.showList = [
        { time: "2020-6-9", text: "剩余0", color: "pink", type: "normal"},
        { time: "2020-6-11", text: "以开放2", color: "green", type: "normal"},
        { time: "2020-6-13", text: "以开放3", color: "black", type: "normal"},
      ]
    })
    setTimeout(()=>{
      this.defaults = [
        { time: "2020-6-6", text: "以开放", color: "pink", type: "normal" },
        { time: "2020-6-13", text: "以开放3", color: "black", type: "normal"},
        { time: "2020-6-11", text: "以开放3", color: "black", type: "normal"},
      ]
    },2000)
  }
};
</script>

<style lang="less" scoped>
.content {
  background: #f0f2f5;
  width: 100vw;
  height: 100vh;
  position: relative;
  .wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 400px;
  }
}
</style>
