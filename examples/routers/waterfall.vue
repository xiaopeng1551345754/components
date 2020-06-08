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
      :img-width="280"
      :none-data='noneData'
      @scroll-bottom="scrollBottom"
      @select-item="selectItem"
    ></waterfall>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgSize: null,
      loadingImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC", // 懒加载图片
      noneData: false,
      list: [{
        type: "live",
        src:
          "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590583689685/0e291d568ba94c3867bab6fa81be583f.jpg",
        status: "doing", //  进行中
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },
      {
        type: "live",
        src:
          "https://digital-expo-oss-jc.oss-cn-hangzhou.aliyuncs.com/expo/3/exhibits/pic20200607045956336_30vvrsxf.jpeg",
        status: "done", //  进行中
        title: "xxxx",
        exhibition_name: "aa",
      },
      {
        type: "static",
        src:
          "http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591875387&t=275055d9e4a80cdcfe90d2f7b8f3dd49",
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },

      {
        type: "static",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },

      {
        type: "static",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },

      {
        type: "static",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },

      {
        type: "static",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },
      {
        type: "live",
        src:
          "https://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591948862&t=49a838e09edb363937de208a82a33670",
        status: "done", //  结束
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },
      {
        type: "live",
        src:
          "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590337754868/30ca03330c48f8fa9d4d20dcb6640206.png",
        status: "nostart", //  未开始
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },
      {
        type: "live",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        status: "doing", //  进行中
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      },
      {
        type: "live",
        src:
          "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1590483334&t=a427c29284cb086a3ec0b0b7609e976f",
        status: "doing", //  进行中
        title: "八个字以内的 title",
        exhibition_name: "展商名字展商名字",
      }],
    };
  },
  methods: {
    //  暴露事件方法
    selectNode (node) {
      console.log(node);
    },
    scrollBottom () {
      // this.list = this.list.concat(this.list);
      console.log("scroll bottom");
    },
    selectItem (item) {
      console.log("item", item);
    },
    change () {
      var self = this;
      const back = JSON.parse(JSON.stringify(this.list));
      this.list = [];
      console.log("this.list", this.list);
      setTimeout(function () {
        self.list = back;
      }, 1000)
    },
    changeNoneData () {
      this.noneData = !this.noneData;
    }
  },
  ready () {
    let list = [
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590341025931/a8e8d7708c241f40374ed99fad39bcbb.png",
        "status": "nostart",
        "title": "时间123",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecaadbe4f71501b06a67bda"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590498666469/a8e8d7708c241f40374ed99fad39bcbb.png",
        "status": "nostart",
        "title": "测试会议852",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ecd157e9983b2529d92ef1f"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590497803900/30ca03330c48f8fa9d4d20dcb6640206.png",
        "status": "nostart",
        "title": "测试2020520",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ecd12279983b2529d92ef1d"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590460183961/6aa25681d3a32a9fa3b094782c488bd5.png",
        "status": "nostart",
        "title": "测试会议图片上传",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecc7f3bec17e463889a6381"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590594108175/f3ccdd27d2000e3f9255a7e3e2c48800.jpg",
        "status": "nostart",
        "title": "一个直播",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ece8b25cfedff458bb49bee"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590995738566/0e291d568ba94c3867bab6fa81be583f.jpg",
        "status": "doing",
        "title": "20200603 测试",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ed4ab36eec87b582945dd11"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590992434214/735601e8cd96eb75edb8f0a748e0f76d.jpg",
        "status": "doing",
        "title": "手机端推流直播测试",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ed49e36c6f3ac3a84166301"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1591446339662/1c704f51cf6cac5ceb5b9a1441d28995.jpg",
        "status": "nostart",
        "title": "录播会议132",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5edb8b79ffcc0d0e81409e66"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590393866225/30e62fddc14c05988b44e7c02788e187.jpg",
        "status": "nostart",
        "title": "全部填写",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecb7c2d3fe81866c741854a"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590833193134/c71975b4897afddc487dd74668a435e3.jpg",
        "status": "nostart",
        "title": "石少奎-测试",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ed230456d839f29bad53d76"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590934761987/735601e8cd96eb75edb8f0a748e0f76d.jpg",
        "status": "doing",
        "title": "高宇创建的会议",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ed3bd576135db0b25e0ac32"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590908363041/0e291d568ba94c3867bab6fa81be583f.jpg",
        "status": "doing",
        "title": "涛哥测试",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ed355efd4420665c2d5ee3d"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590406890518/6aa25681d3a32a9fa3b094782c488bd5.png",
        "status": "nostart",
        "title": "11111",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ecbaeffb5e6851b7dea08c3"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590340580798/b5013486e826531a3b4f65d3b509f992.jpg",
        "status": "nostart",
        "title": "会议测试2",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecaac114f71501b06a67bca"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590590125955/9556faadc014c393814976bd1c1f9b18.jpg",
        "status": "nostart",
        "title": "测试",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ece7ae4cf0aae3720a04fbd"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590384853947/559e060da4e6213d3633ea1d151e31e5.png",
        "status": "nostart",
        "title": "05251333测试资料",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecb5a254f71501b06a67c4d"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590405770575/e6d7c5547d565cdaef6ad4433d0e5314.png",
        "status": "nostart",
        "title": "的健康",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ecbaaa6b5e6851b7dea08b8"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1591207290329/d1b3dc5b92820c42c21db900b72992e2.jpg",
        "status": "doing",
        "title": "高宇测试会议",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5ed7e5a81ea2b8424f0247a6"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1590460450277/559e060da4e6213d3633ea1d151e31e5.png",
        "status": "nostart",
        "title": "测试提示",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "LIVE",
        "goodsId": "5ecc8050ec17e463889a6383"
      },
      {
        "type": "live",
        "src": "https://hexyun.oss-cn-beijing.aliyuncs.com/cloud_expo_5eb6152d14b7b129cf44ec71/1591446442094/931fcd2ea7d9da4549c2a8c98efcd4ff.jpg",
        "status": "doing",
        "title": "录播会议123456",
        "exhibition_name": null,
        "exhibitorId": "111",
        "original": "MEETING",
        "goodsId": "5edb8bccffcc0d0e81409e68"
      }
    ]
    let self = this;
    let count = 0;
    this.__timer = setInterval(function () {
      // self.list = self.list.concat(list);
      count += 1;
      if (count >= 15) {
        clearInterval(self.__timer);
      }
      // console.log('count', count);
    }, 1000);
  },
};
</script>
<style lang="less">
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
