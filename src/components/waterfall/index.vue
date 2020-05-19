<template>
  <div class="hex-waterfall">
    <vue-waterfall-easy
      :imgs-arr="list"
      @scrollReachBottom="scrollBottom()"
      @click="selectItem"
      :max-cols="4"
    >
    <!-- <div class="img-info" slot-scope="props">
      <p>第{{props.src+1}}张图片</p>
    </div> -->
    </vue-waterfall-easy>
  </div>
</template>
<script>
// import { throttle } from '../../utils/dom'
import clickOutSide from "../../directives/clickoutside.js";
import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue'
export default {
  name: "waterfall",
  components: {
    vueWaterfallEasy
  },
  directives: {
    clickOutSide
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    loadingImg: {
      type: "",
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  ready() {
  },
  methods: {
    // init waterfall instance
    init() {

    },
    scrollBottom() {
      console.log('scrollBottom')
      this.$emit("scrollBottom");
    },
    selectItem() {
      this.$emit("selectItem");
    }
  }
};
</script>
<style lang="less">
.hex-waterfall{
  height: 500px;
}
.px-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.left {
  float: left;
}
.font22 {
  font-size: 22px;
}
.color-fff {
  color: #fff;
}
.fh {
  overflow: hidden;
}
[v-cloak] {
  display: none !important;
}
.waterfall {
  margin-top: 20px;
}
.px-waterfall {
  width: calc(380px);
  &:nth-child(3n + 2) {
    margin: 0 30px;
  }
  img.bg-img {
    border-radius: 8px;
  }
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 30px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  li {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
  }
}

.px-hot-tag {
  position: absolute;
  top: 0;
  border-radius: 8px;
  width: 71px;
  height: 30px;
  img {
    border-radius: 8px 0 8px 0;
  }
}
.photo {
  position: relative;
  height: 25px;
  .keywordbox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 25px;
  }
}
.keyword {
  height: 25px;
  line-height: 25px;
  padding: 0 22px;
  text-align: center;
  .color-666-line {
    border-bottom: 2px solid #666666;
  }
  .red-line {
    border-bottom: 2px solid #f65050;
  }
}
</style>
