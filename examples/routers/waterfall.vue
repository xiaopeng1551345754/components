<template>
  <waterfall
    :loading-img="loadingImg"
    :list="list"
    @scroll-bottom="scrollBottom"
    @select-item="selectItem"
  ></waterfall>
</template>
<script>
export default {
  data() {
    return {
      loadingImg:
        "http://n.sinaimg.cn/translate/34/w534h300/20180506/EZhs-hacuuvu0675818.jpg", // 懒加载图片
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
  }
};
</script>
