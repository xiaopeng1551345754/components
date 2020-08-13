<template>
  <div class="date-time-picker">
    <div :class="{'date-time-mask':visible}"
         @click="maskClick"
         @mousedown="maskClick"></div>
    <div class="date-time-dialog"
         :class="{'date-time-dialog-show':visible}">
      <div class="date-time-content">
        <date-time class="date-time-list"
                   v-for="(index,item) in dateList"
                   :key="index"
                   :data="item"
                   :data-index="index"
                   :default-date="defaultDate"
                   @getselectvalue="getselectvalue"></date-time>
      </div>
      <div class="date-time-btn">
        <div class="cancel"
             @click="cancel">取消</div>
        <p style="margin: 0 36px;"></p>
        <div class="confirm"
             @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
import DateTime from './datetime'
export default {
  components: {
    DateTime
  },
  props: {
    // 是否显示
    visible: {
      type: Boolean,
      default: false
    },
    // 日期列表
    dateList: {
      type: Array,
      default: () => []
    },
    // 默认的日期
    defaultDate: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      seletedData: '',
      seletedDate: '',
      seletedTime: ''
    }
  },
  methods: {
    getselectvalue (data, index) {
      if (index === 0) {
        this.seletedDate = data
      }
      if (index === 1) {
        this.seletedTime = data
      }
    },
    maskClick () {
      this.visible = false;
    },
    cancel () {
      this.visible = false;
      this.$emit('cancel');
    },
    confirm () {
      this.seletedData = `${this.seletedDate} ${this.seletedTime}`;
      this.visible = false;
      this.$emit('confirm', this.seletedData);
    }
  }
}
</script>
<style lang="less" scoped>
.date-time-mask {
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.date-time-dialog {
  border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}
.date-time-content {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  .date-time-list {
    flex: 1;
    text-align: center;
  }
}
.date-time-btn {
  display: flex;
  padding: 6px 36px 16px;
  justify-content: space-evenly;
  position: relative;
  z-index: 12;
  cursor: pointer;
  div {
    flex: 1;
    font-size: 12px;
    padding: 4px 24px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-align: center;
  }
  .cancel {
    background: #eee;
    color: #48b477;
  }
  .confirm {
    background: #48b477;
    color: #fff;
  }
}
.date-time-dialog-show {
  transform: translateY(0);
}
</style>
