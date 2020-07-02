<template>
  <div class="imgscroll-wrap" v-el:wrap>
    <div 
      @click='selectThis(item)'
      v-for="(idx, item) in list"
      :key="idx"
      :style="{backgroundImage: 'url('+item.img+')',height: height+ 'px'}"></div>
  </div>
</template>
<script>
export default {
  name: "imgscroll",
  props: {
    list: {
      type: Array
    },
    defaultRem: {
      type: Number,
      default: 0
    },
    changeRem: {
      type: Number,
      default: 2
    },
    startChange: {
      type: Number,
      default: 0.5
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      boxArr: [],
      dom: ''
    };
  },
  ready () {
    this.$nextTick(()=>{
      this.dom = this.$els.wrap
    })
  },
  methods: {
    selectThis (img) {
      this.$emit('select', img)
    },
    init () {
      this.$nextTick(()=>{
        var uiWidth = 750
        var docEl = this.dom
        var recalc = function () {
          // 乘以一个比例，作为rem的值，实现rem的值随着设别宽度的不同而不同
          var clientWidth = docEl.clientWidth || 0
          docEl.style.fontSize = 100 * (clientWidth / uiWidth) + 'px'
        }
        recalc() // 先自动触发一下
        window.addEventListener('resize', recalc, false) // 添加页面监听事件
  
        this.getBoxArr() // 获取各个盒子的位置高度信息
        if (this.boxArr && this.boxArr.length) {
          this.initPosition() // 初始化功能
        }
      })
    },
    getBoxArr () {
      var doms = document.querySelectorAll('.imgscroll-wrap > div')
      this.boxArr = []
      if (doms && doms.length) {
        for (var i = 0; i < doms.length; i++) {
          var boxDom = doms[i]
          this.boxArr.push({
            boxDom: boxDom, // 盒子的dom
            startSpace: boxDom.offsetTop + (1 + this.startChange), // 开始修改背景的位置（盒子的顶部，距离页面文档顶部的距离）
            boxHeight: boxDom.offsetHeight, // 盒子高度
            endSpace:
              boxDom.offsetTop +
              (1 + this.startChange) +
              boxDom.offsetHeight // 结束修改背景的位置（盒子的底部，距离页面文档顶部的距离）
          })
        }
      }
    },
    initPosition () {
      this.setPosition()
      this.dom.addEventListener('scroll', this.windowScroll)
    },
    windowScroll () {
      this.setPosition()
    },
    setPosition () {
      const boxArr = this.boxArr
      if (!boxArr || !boxArr.length) return
      var scrollTop = this.dom.scrollTop
      for (var i = 0; i < boxArr.length; i++) {
        var boxDom = boxArr[i].boxDom,
          startSpace = boxArr[i].startSpace,
          endSpace = boxArr[i].endSpace,
          boxHeight = boxArr[i].boxHeight
        if (scrollTop < startSpace) {
          // 还没到的dom
          boxDom.style.backgroundPosition =
            ' center ' + this.defaultRem + 'rem'
        } else if (scrollTop > endSpace) {
          // 已经过去了的dom
          boxDom.style.backgroundPosition =
            ' center ' + this.defaultRem + this.changeRem + 'rem'
        } else {
          // 正好处于，开始设置
          var remNum =
            this.defaultRem +
            ((scrollTop - startSpace) / boxHeight) * this.changeRem // 按比例计算
          let string = ' center ' + remNum + 'rem'
          boxDom.style['backgroundPosition'] = string
        }
      }
    }
  },
  watch: {
    list: {
      immediate: true,
      handler (n) {
        this.$nextTick(() => {
          this.init()
        })
      }
    }
  }
};
</script>
<style lang="less" scoped>
.imgscroll-wrap {
  height: 100%;
  overflow: auto;
}
.imgscroll-wrap div {
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
