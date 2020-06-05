<template>
  <div class='waterfall_wrap'>
    <!-- <div id="dom">
      <div>

      </div>
    </div> -->
    <waterfall
      :loading-img="loadingImg"
      :list="list"
      :lang='"en"'
      :dom-id='"#dom"'
      :img-size="imgSize"
      @scroll-bottom="scrollBottom"
      @select-item="selectItem"
    ></waterfall>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSize: null,
      loadingImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC", // 懒加载图片
      list: [
        {
          type: "live",
          src:
            "http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591875387&t=275055d9e4a80cdcfe90d2f7b8f3dd49",
          status: "doing", //  进行中
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590337754868/30ca03330c48f8fa9d4d20dcb6640206.png",
          status: "done", //  进行中
          title: "xxxx",
          exhibition_name: "aa"
        },
        {
          type: "static",
          src:
            "http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591875387&t=275055d9e4a80cdcfe90d2f7b8f3dd49",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },

        {
          type: "static",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },

        {
          type: "static",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },

        {
          type: "static",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },

        {
          type: "static",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591948862&t=49a838e09edb363937de208a82a33670",
          status: "done", //  结束
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590337754868/30ca03330c48f8fa9d4d20dcb6640206.png",
          status: "nostart", //  未开始
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          status: "doing", //  进行中
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          status: "doing", //  进行中
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        }
      ]
    };
  },
  methods: {
    //  暴露事件方法
    selectNode(node) {
      console.log(node);
    },
    scrollBottom() {
      this.list = this.list.concat(this.list)
      console.log("scroll bottom");
    },
    selectItem(item) {
      console.log("item",item);
    }
  },
  ready () {
    // setTimeout(() => this.imgSize = {
    //     live: {
    //       width: 240,
    //       height: 400
    //     },
    //     static: {
    //       width: 240,
    //       height: 300
    //     }
    //   }, 0)
  }
};
</script>
<style lang="less">
.waterfall_wrap {
  width: 1000px;
  height: 700px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
#dom {
  height: 200px;
  width: 200px;
  background: green;
  overflow: auto;
  div {
    height: 400px;
  }
}
</style>
