<template>
  <div class="table-wrapper">
    <div class="table-list">
      <div class="table-header">
        <div class="header"
             :style="{'width': header.width + 'px'}"
             v-for="header in tableList[0]"
             :key="header.id">
          {{header.name}}
        </div>
      </div>
      <div class="table-body">
        <div class="body"
             v-for="(key,body) in tableList[1]"
             :key="key">
          <div class="item"
               v-if=" body.name"
               :style="{'width': bodyWidth[0] + 'px'}">{{ body.name}}</div>
          <div class="item"
               v-if=" body.leader"
               :style="{'width': bodyWidth[1] + 'px'}">{{ body.leader}}</div>
          <div class="item"
               v-if="body.phone"
               :style="{'width': bodyWidth[2] + 'px'}">{{ body.phone }}</div>
          <div class="item"
               v-if="body.status"
               :style="{'width': bodyWidth[3] + 'px'}">
            <p v-if="body.status === 1">组队中</p>
            <p v-if="body.status === 2"
               style="color: #FB5004">驳回</p>
            <p v-if="body.status === 3">通过</p>
          </div>
          <div class="item"
               v-if="body.isPublic || body.isPublic === false || body.isPublic === true"
               :style="{'width': bodyWidth[4] + 'px'}">
            <input type="checkbox"
                   :checked="body.isPublic"
                   class="switch"
                   @click="changestatus(body)">
          </div>
          <div class="item btn"
               v-if="body.handle && body.handle.length > 0"
               :style="{'width': bodyWidth[5] + 'px'}">
            <button :style="{
                      'background': btn.background,
                      'color': btn.color, 
                      'width':btn.width + 'px',
                      'border-color': btn.name === '已通知专家' ? btn.color : ''
                    }"
                    type="button"
                    v-for="(i,btn) in body.handle"
                    :key="i"
                    @click="clickbtn(body, btn)">
              {{ btn.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tablelist',
  props: {
    tableList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    bodyWidth () {
      return this.tableList[0].map(v => v.width)
    },
    bodyList () {
      return this.tableList[0].map(v => v.label)
    }
  },
  methods: {
    changestatus (data) {
      data.isPublic = !data.isPublic;
      this.$emit('changestatus', data);
    },
    clickbtn (data, btn) {
      this.$emit('clickbtn', data, btn);
    }
  }
}
</script>
<style lang="less" scoped>
.table-wrapper {
  width: 100%;
  height: 100%;
  .table-list {
    .table-header {
      display: flex;
      height: 58px;
      background: rgba(250, 250, 250, 1);
      font-size: 14px;
      font-weight: 500;
      color: rgba(38, 38, 38, 1);
      line-height: 58px;
      .header:last-child {
        text-align: center;
      }
      .header {
        padding-left: 16px;
        box-sizing: border-box;
      }
    }
    .table-body {
      .body {
        display: flex;
        font-size: 14px;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
        border-bottom: 1px solid rgba(232, 232, 232, 1);
        height: 58px;
        align-items: center;
        .item {
          box-sizing: border-box;
          padding-left: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          input[type="checkbox"].switch {
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            position: relative;
            width: 60px;
            height: 32px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
            border-radius: 16px;
            border: 1px solid rgba(217, 217, 217, 1);
            transition: border-color 0.3s, background-color 0.3s;
          }
          input[type="checkbox"].switch::after {
            content: "";
            display: inline-block;
            width: 30px;
            height: 30px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(217, 217, 217, 1);
            border-radius: 50%;
            transition: 0.4s;
            top: -1px;
            position: absolute;
            left: -2px;
          }

          input[type="checkbox"].switch:checked {
            background: rgba(70, 212, 105, 1);
            border: 1px solid rgba(70, 212, 105, 1);
          }
          /* 当input[type=checkbox]被选中时：伪元素显示下面样式 位置发生变化 */
          input[type="checkbox"].switch:checked::after {
            content: "";
            position: absolute;
            left: 47%;
          }
        }
        .btn {
          display: flex;
          button {
            outline: 0;
            box-sizing: border-box;
            height: 32px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
            border-radius: 4px;
            border: 1px solid rgba(217, 217, 217, 1);
            line-height: 32px;
            text-align: center;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
