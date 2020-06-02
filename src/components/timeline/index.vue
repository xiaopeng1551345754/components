<template>
  <div class="ali_time_line">
    <div class="ali_time_line_head">
      <div class="items time">
        {{t('time')}}
      </div>
      <div class="items line_wrap"></div>
      <div class="items theme">
        {{t('theme')}}
      </div>
      <div class="items type">
        {{t('type')}}
      </div>
      <div class="items people">
        {{t('people')}}
      </div>
      <div class="items select">
        {{t('select')}}
      </div>
    </div>
    <div class="ali_time_line_item_wrap">
      <div class="ali_time_line_item" v-for='(idx, item) in data' :key='idx'>
        <div class="items time">
          {{item.time}}
        </div>
        <div class="items line_wrap" :class="{'first':idx===0,'end':idx === data.length-1,'only':data.length === 1}">
          <div class="line">

          </div>
          <div class="circle">
            <div class="inner">

            </div>
          </div>
        </div>
        <div class="right_wrap">
          <div class="right">
            <div class="items theme">
              {{item.theme}}
            </div>
            <div class="items type">
              {{item.type}}
            </div>
            <div class="items people">
              {{item.people}}
            </div>
            <div class="items select" @click='select(item)'>
              {{t('watch')}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    lang: {
      type: String,
      default: "zh",
    },
    langInfo: {
      type: Object,
      default () {
        return {
          zh: {
            time: '时间',
            theme: '主题',
            type: '类型',
            people: '主要人员',
            selece: '操作',
            watch: '查看'
          },
          en: {
            time: 'time',
            theme: 'theme',
            type: 'type',
            people: 'members',
            selece: 'handle',
            watch: 'see'
          }
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    t(keypath) {
      const o = this.langInfo[this.lang] || {}
      const keys = keypath.split('.')
      let r = o
      let key
      for(let i = 0; i < keys.length; i++) {
        key = keys[i]
        if (key && typeof r === 'object') {
          r = r[key]
        }
      }
      return r || ''
    },
    select (item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="less" scoped>
.ali_time_line {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .ali_time_line_item_wrap {
    flex-grow: 1;
    height: 100px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .ali_time_line_head, .ali_time_line_item{
    flex-shrink: 0;
    display: flex;
    cursor: pointer;
    &:hover .right{
      background:#fff !important;
      border:1px solid rgba(46,76,244,1) !important;
      &::before {
        border-right: 15px  solid rgba(46,76,244,1) !important;
      }
      &::after {
        position: absolute;
        content: '';
        right: 100%;
        top: 50%;
        transform: translate(2px,-50%);
        border-top: 10px transparent dashed;
        border-left: 10px transparent dashed;
        border-bottom: 10px transparent dashed;
        border-right: 15px #fff solid;
        z-index: 1;
      }
    }
    .items {
      flex-shrink: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      color:rgba(0,0,0,0.65);
      text-shadow:1px 1px 2px rgba(0,0,0,0.25);
      line-height: 22px;
      padding: 12px 0;
    }
    .right_wrap {
      padding: 16px 0;
      margin-left: 14px;
      .right {
        display: flex;
        font-size: 18px;
        background:#f5f5f5;
        box-shadow:1px 1px 2px 0px rgba(0,0,0,0.25),0px 0px 2px 0px rgba(0,0,0,0.15);
        padding-left: 14px;
        position: relative;
        border:1px solid rgba(0,0,0,0);
        &:before {
          position: absolute;
          content: '';
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-top: 10px transparent dashed;
          border-left: 10px transparent dashed;
          border-bottom: 10px transparent dashed;
          border-right: 15px #f5f5f5 solid;
        }
      }
    }
    .time{
      width: 140px;
      text-align: right;
      color:rgba(0,0,0,0.65);
      font-size:24px;
    } 
    .line_wrap{
      margin-left: 16px;
      width: 28px;
      position: relative;
      .line {
        position: absolute;
        width: 2px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background: #1890FF;
      }
      .circle {
        width: 14px;
        height: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #1890FF;
        border-radius: 50%;
        .inner {
          width: 10px;
          height: 10px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #1890FF;
          border-radius: 50%;
        }
      }
    }
    .first {
      .line {
        height: 50%;
        top: 50%;
      }
    }
    .end {
      .line {
        height: 50%;
      }
    }
    .only {
      .line {
        height: 0;
      }
    }
    .theme{
      width: 282px;
    }
    .type{
      width: 150px;
    }
    .people{
      width: 322px;
    }
    .select{
      width: 70px;
      color: #1890FF;
      text-shadow: 0;
      cursor: pointer;
    }
  }
  .ali_time_line_head {
    .items {
      font-size: 20px;
      color:rgba(0,0,0,0.85);
      text-shadow:1px 1px 2px rgba(0,0,0,0.25);
    }
    .theme {
      margin-left: 28px;
    }
  }
  .ali_time_line_item {
    .time {
      line-height: 54px;
    }
  }
}
</style>
