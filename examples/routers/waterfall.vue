<template>
  <div class="waterfall_wrap">
    <!-- <div id="dom">
      <div>

      </div>
    </div> -->
    <button @click="change">修改</button>
    <button @click="changeNoneData">修改空数据</button>
    <waterfall
      :loading-img="loadingImg"
      :list="list"
      :lang="'en'"
      :img-size="imgSize"
      :img-width="294"
      :none-data='noneData'
      :gap='8'
      :type="type"
      @scroll-bottom="scrollBottom"
      @select-item="selectItem"
    ></waterfall>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgSize: {
        live: {
          width: 280,
          // height: 400
        },
        static: {
          width: 280,
          // height: 300
        }
      },
      loadingImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC", // 懒加载图片
      noneData: false,
      list: [],
      type: 'pc'
    };
  },
  created () {
    console.log('created');
    this.request()

  },
  methods: {
    //  暴露事件方法
    selectNode (node) {
      console.log(node);
    },
    scrollBottom () {
      console.log("scroll bottom");
      this.getWaterfall();
    },
    selectItem (item) {
      console.log("item", item);
    },
    change () {
      var self = this;
      this.list = [];
      setTimeout(function () {
      }, 1000)
    },
    changeNoneData () {
      this.noneData = !this.noneData;
    },
    request () {
      $.post({
        url: 'https://13000.preview.lowcode.com/flow/api/5ee9d1f0ed52eb2a22750f95',
        data: {},
        dataType: 'json',
        success: function (res) { }
      });
    },
    // 抓取数据
    getWaterfall () {
      const self = this;
      $.post({
        url: 'https://13000.preview.lowcode.com/flow/api/5ee9d1f0ed52eb2a22750f95',
        data: {},
        dataType: 'json',
        success: function (res) {
          if (res.data && res.data.list) {
            let list = res.data.list;
            list = list.map(item => {
              item.src = item.coverUrl;
              item.title = item.goodsName;
              item.exhibition_name = item.ownerName;
              item.status = 'doing';
              item.realPath = '';

              const liveTypes = new Set(['LIVE', 'MEETING']);
              item.type = liveTypes.has(item.goodsType) ? 'live' : 'static';
              // delete item.ImageHeight;
              // delete item.ImageWidth;
              return item;
            });
            self.list = self.list.concat(list);
          }
        }
      });
    }
  },
  ready () {
    this.getWaterfall();

    let time = 0;

    // this.__timer = setInterval(() => {
    //   this.getWaterfall();
    //   time += 1;
    //   if (time >= 5) {
    //     clearInterval(this.__timer);
    //   }
    // }, 1000);
  },
};
</script>
<style lang="less" scoped>
.waterfall_wrap {
  width: 1200px;
  height: 700px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
