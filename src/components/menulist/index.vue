<template>
  <div class="menu-wrapper">
    <div class="menu-header">菜单</div>
    <!-- 一级菜单 -->
    <div class="menu-list last-child"
         style="position:relative;"
         v-for="(index, item) in menuList"
         :key="index">
      <div class="line"></div>
      <div v-if="clickIndex === index + '|-1'"
           type="text"
           class="activeline"></div>
      <div class="menu-item"
           :class="{'otherColor' : clickIndex === index + '|-1'}"
           @click.stop="clickitem(item, 0, index, 'parent')">
        <div class="text">
          <span v-if="!(clickIndex === index + '|-1')">{{item.name}}</span>
          <input v-if="clickIndex === index + '|-1'"
                 type="text"
                 :value="item.name"
                 v-model="itemValue"
                 @blur='blurEdit(item)'
                 @focus="saveEdit(item)">
        </div>
        <div class="btn"
             @click.stop="clickmore(0, item, index, 'parent')">...</div>
      </div>
      <popup v-show="item.show"
             :pop-list="popList"
             style="position: absolute; right: 24px; top: 28px;z-index: 9999;"
             @delmenu="delmenu(0, item, index,'parent')"
             @addfirst="addfirst(item)"
             @addsecond="addsecond(item)"></popup>
      <!-- 二级菜单 -->
      <div class="menu-list children-list"
           style="position:relative;"
           v-for="(idx, i) in item.children"
           :key="idx">
        <div class="line"></div>
        <div v-if="clickIndex === index + '|' + idx"
             type="text"
             class="activeline"></div>
        <div class="menu-item children-item"
             :class="{'otherColor' : clickIndex === index + '|' + idx}"
             @click.stop="clickitem(i, index, idx, 'children')">
          <div class="text">
            <span v-if="!(clickIndex === index + '|' + idx)">{{ i.name }}</span>
            <input v-if="clickIndex === index + '|' + idx"
                   type="text"
                   :value="i.name"
                   v-model="itemValue"
                   @blur='blurEdit(i)'
                   @focus="saveEdit(i)">
          </div>
          <div class="btn"
               @click.stop="clickmore(item, i, idx, 'children')">...</div>
        </div>
        <popup v-show="i.show"
               :pop-list="popList"
               style="position: absolute; right: 24px; top: 28px;z-index: 9999;"
               @addmenu="addmenu(item,i)"
               @delmenu="delmenu(item, i, idx, 'children')"></popup>
        <!-- 新增二级输入框 -->
        <div class="input-section"
             style="position:relative;"
             v-if="i.showInput">
          <div class="text">
            <input type="text"
                   placeholder="请输入菜单名称"
                   v-model="inputValue">
          </div>
          <div class="btn"
               @click="clickmore(0, 0, 0, 'addInput')">...</div>
          <popup v-if="popshow"
                 :pop-list="popList"
                 style="position: absolute; right: 24px; top: 28px;z-index: 9999;"
                 @addmenu="addchildrenmenu(item, i, idx)"
                 @delmenu="delinputmenu"></popup>
        </div>
      </div>
      <!-- 新增一级输入框 -->
      <div class="input-section"
           style="position:relative;"
           v-if="item.showInput">
        <div class="text">
          <input type="text"
                 placeholder="请输入菜单名称"
                 v-model="inputValue">
        </div>
        <div class="btn"
             @click="clickmore(0, 0, 0, 'addInput')">...</div>
        <popup v-if="popshow"
               :pop-list="popList"
               style="position: absolute; right: 24px; top: 28px;z-index: 9999;"
               @delmenu="delinputmenu"
               @addfirst="addparentfirst(item, index)"
               @addsecond="addparentsecond(item, index)"></popup>
      </div>
    </div>
  </div>
</template>
<script>
import popup from './pop.vue'
export default {
  name: 'menulist',
  components: {
    popup
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      prevValue: '',
      itemValue: '',
      inputValue: '',
      popshow: false,
      clickIndex: -1,
      popList: [{
        name: '添加',
        arrow: true,
        level: 1,
        children: [
          {
            name: '一级菜单',
            menu: 1
          },
          {
            name: '二级菜单',
            menu: 2
          }
        ],
      }, {
        name: '删除',
        arrow: false,
        level: 1
      }],
    }
  },
  methods: {
    // 直接添加二级菜单
    addchildrenmenu (item, i, index) {
      this.popshow = false;
      i.showInput = false;
      if (this.inputValue) {
        var _id = parseInt((Math.random() * 100000).toString().substr(0, 5))
        var data = {
          id: _id,
          level: 2,
          name: this.inputValue,
          value: this.inputValue,
          show: false,
          showInput: false,
        }
        item.children.splice(index + 1, 0, data);
        this.$emit('addchildrenmenu', item, index + 1, data);
      }
      this.inputValue = '';
    },
    // 删除正在输入的菜单
    delinputmenu () {
      this.popshow = false;
      this.showInput = false;
      this.inputValue = '';
    },
    // 添加选中一级菜单中的一级菜单
    addparentfirst (item, index) {
      this.popshow = false;
      item.showInput = false;
      if (this.inputValue) {
        var _id = parseInt((Math.random() * 100000).toString().substr(0, 5))
        var data = {
          id: _id,
          name: this.inputValue,
          value: this.inputValue,
          show: false,
          showInput: false,
          level: 1,
          children: []
        }
        this.menuList.splice(index + 1, 0, data);
        this.$emit('addparentfirst', index + 1, data);
      }
      this.inputValue = '';
    },
    // 添加选中一级菜单的二级菜单
    addparentsecond (item, index) {
      this.popshow = false;
      item.showInput = false;
      if (this.inputValue) {
        var _id = parseInt((Math.random() * 100000).toString().substr(0, 5))
        var data = {
          id: _id,
          level: 2,
          name: this.inputValue,
          value: this.inputValue,
          show: false,
          showInput: false
        }
        item.children.push(data)
        this.$emit('addparentsecond', item, data);
        this.inputValue = '';
      }
    },
    // 点击二级菜单的添加
    addmenu (item, i) {
      i.show = false;
      i.showInput = true;
      this.inputValue = ''
      this.menuList.map(v => {
        v.showInput = false;
        if (v.children && v.children.length) {
          v.children.map(val => {
            if (val.id !== i.id) {
              val.showInput = false
            }
            return val;
          })
        }
        return v;
      })
    },
    // 点击删除
    delmenu (parent, item, index, type) {
      item.show = false;
      if (type === 'parent') {
        this.menuList.splice(index, 1);
        this.$emit('delparentmenu', item, index)
      }
      if (type === 'children') {
        parent.children.splice(index, 1);
        this.$emit('delchildrenmenu', parent, item, index);
      }
    },
    // 点击一级菜单的一级按钮
    addfirst (item) {
      item.show = false;
      item.showInput = true;
      this.inputValue = '';
      this.menuList.map((v, i) => {
        if (v.id !== item.id) {
          v.showInput = false;
          if (v.children && v.children.length) {
            v.children.map(v => {
              v.showInput = false;
            })
          }
        } else {
          if (v.children && v.children.length) {
            v.children.map(v => {
              v.showInput = false;
            })
          }
        }
      })
    },
    // 点击一级菜单的二级按钮
    addsecond (item) {
      item.show = false;
      item.showInput = true;
    },
    // 点击三个点 主要功能是展示pop组件
    clickmore (item, i, index, type) {
      if (type === 'parent') {
        i.show = true;
        this.menuList.map((v, i) => {
          if (i !== index) {
            v.show = false;
            if (v.children && v.children.length) {
              v.children.map(v => {
                v.show = false
              })
            }
          } else {
            if (v.children && v.children.length) {
              v.children.map(v => {
                v.show = false;
              })
            }
          }
        })
        this.popList[0].arrow = true;
        this.popList.map(val => val.level = 1);
      }
      if (type === 'children') {
        i.show = true;
        this.menuList.map(v => {
          v.show = false;
          if (v.children && v.children.length) {
            v.children.map((val, idx) => {
              if (val.id !== i.id) {
                val.show = false;
              }
            })
          }
        })
        this.popList.map(val => {
          val.arrow = false;
          val.level = 2
        })
      }
      if (type === 'addInput') {
        this.popshow = true;
      }
    },
    // 编辑菜单
    blurEdit (item) {
      this.clickIndex = -1;
      if (this.itemValue && this.prevValue !== this.itemValue) {
        item.name = this.itemValue;
        item.value = this.itemValue;
        this.$emit('changename', item, this.itemValue);
      }
    },
    saveEdit (item) {
      this.prevValue = item.name;
    },
    // 选中每一条菜单
    clickitem (item, parentIndex, index, type) {
      if (type === 'parent') {
        this.clickIndex = index + '|-1';
      }
      if (type === 'children') {
        this.clickIndex = parentIndex + '|' + index;
      }
      this.$emit('clickitem', item)
    }
  }
}
</script>
<style lang="less" scoped>
input {
  outline: none;
  border: none;
}
.menu-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(23, 44, 66, 0.06);
  border-radius: 6px 0 0 6px;
  cursor: pointer;
  .menu-header {
    padding: 20px 24px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 24px;
  }
  .last-child:last-child {
    border-bottom: 1px solid rgba(232, 232, 232, 1);
  }
  .menu-list {
    .line {
      height: 1px;
      background: rgba(232, 232, 232, 1);
    }
    .activeline {
      width: 2px;
      height: 38px;
      background: rgba(22, 72, 127, 1);
      position: absolute;
    }
    .otherColor {
      background: rgba(22, 72, 127, 0.06);
      font-weight: 500 !important;
      color: rgba(22, 72, 127, 1) !important;
      .text {
        input {
          flex: 1;
          background: rgba(22, 72, 127, -0.94);
          font-weight: 500;
          color: rgba(22, 72, 127, 1) !important;
        }
      }
    }
    .menu-item {
      display: flex;
      padding: 9px 24px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.8);
      .text {
        text-align: left;
        flex: 1;
        input {
          color: rgba(0, 0, 0, 0.8);
          flex: 1;
        }
      }
      .btn {
        text-align: right;
      }
    }
  }
  .input-section {
    height: 40px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    border-top: 1px solid rgba(232, 232, 232, 1);
    border-bottom: 1px solid rgba(232, 232, 232, 1);
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    .text {
      flex: 1;
    }
    .btn {
      text-align: right;
    }
  }
  .children-list {
    .children-item {
      padding-left: 40px;
      display: flex;
      .text {
        flex: 1;
        input {
          flex: 1;
        }
      }
    }
  }
}
</style>
