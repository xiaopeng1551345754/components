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
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          status: "doing", //  进行中
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
          type: "static",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
          status: "done", //  结束
          title: "八个字以内的 title",
          exhibition_name: "展商名字展商名字"
        },
        {
          type: "live",
          src:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
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
    setTimeout(() => this.imgSize = {
        live: {
          width: 240,
          height: 400
        },
        static: {
          width: 240,
          height: 300
        }
      }, 0)
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
