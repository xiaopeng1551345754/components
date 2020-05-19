<style lang="less">
  
</style>
<template>
  <div class="hex-cate">
    navcate
  </div>
</template>
<script>
  // import { throttle } from '../../utils/dom'
  import clickOutSide from '../../directives/clickoutside.js'
  export default {
    name: 'navCate',
    directives: {
      clickOutSide
    },
    props: {
      menuList: Array,
      default: []
    },
    data() {
      return {
      }
    },
    watch: {
    },
    computed: {
    },
    ready() {
    },
    methods: {
      // init waterfall instance
      init () {
        
      }
    }
  }
</script>
