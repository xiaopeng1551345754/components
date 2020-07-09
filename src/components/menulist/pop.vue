<template>
  <div class="pop-wrapper">
    <div class="pop-list"
         v-for="(index, item) in popList"
         :key="index">
      <div class="pop-item"
           :class="{select:index===isSelect}"
           :style="item.level === 1 ? '' : 'justify-content: center'"
           @click="clickitem(item, index, 'parent')">
        <div class="text">{{ item.name }}</div>
        <div v-if="item.arrow"
             class="arrow"><img src="./img/arrowdown.png"
               alt=""></div>
      </div>
      <div class="pop-wrapper"
           style="position: absolute; left: 91px; top:0;z-index: 9999;"
           v-if="item.arrow && showChildren">
        <div class="pop-list"
             v-for="(idx, children) in item.children"
             :key="idx">
          <div class="pop-item"
               @click="clickitem(children, idx, 'children')">{{ children.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pop',
  props: {
    popList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showChildren: false,
      isSelect: -1
    }
  },
  methods: {
    init () {
      this.showChildren = false;
      this.isSelect = -1;
    },
    clickitem (item, index, type) {
      this.init()
      if (type === 'parent') {
        this.isSelect = index;
        this.showChildren = true;
        if (!item.arrow && item.name === '添加') {
          this.$emit('addmenu');
          this.showChildren = false;
          this.isSelect = -1;
        }
        if (!item.arrow && item.name === '删除') {
          this.$emit('delmenu');
        }
      }
      if (type === 'children') {
        if (item.menu === 1) {
          this.$emit('addfirst');
        }
        if (item.menu === 2) {
          this.$emit('addsecond');
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.pop-wrapper {
  width: 90px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(23, 44, 66, 0.1);
  border-radius: 4px;
  padding: 4px 0;
  box-sizing: border-box;
  .pop-list {
    .select {
      background: rgba(242, 245, 247, 1);
    }
    .pop-item:hover {
      background: rgba(242, 245, 247, 1);
    }
    .pop-item {
      display: flex;
      padding: 5px 16px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
      .arrow {
        flex: 1;
        text-align: right;
        margin-left: 23px;
      }
    }
  }
}
</style>
