<template>
  <div class="ali_date_picker">
    <div class="head">
      <div class="times">
        <div class="start time" v-click-out-side='hide(0)'>
          <div class="show-time" v-show="startStr" v-html="startStr" @click='show(0)'></div>
          <div class="choose-time" v-show="!startStr" @click='show(0)'>
            <div class="img">
              <img src="./image/time.png" />
            </div>
            <div class="text">
              {{ t("start") }}
            </div>
          </div>
          <dataselect
            class="select"
            v-show="fromShow"
            :max-start="maxStart"
            :max-end="maxEnd"
            :lang="lang"
            :lang-info="langInfo"
            :show-year="startYear"
            :show-month="startMonth"
            :show-day="startDay"
            :show-hour="startHour"
            :show-minute="startMinute"
            @selected="selectedFrom"
          ></dataselect>
        </div>
        <div class="bar1"></div>
        <div class="end time" v-click-out-side='hide(1)'>
          <div class="show-time" v-show="endStr" v-html="endStr" @click='show(1)'></div>
          <div class="choose-time" v-show="!endStr" @click='show(1)'>
            <div class="img">
              <img src="./image/time.png" />
            </div>
            <div class="text">
              {{ t("end") }}
            </div>
          </div>
          <dataselect
            class="select"
            v-show="endShow"
            :max-start="maxStart"
            :max-end="maxEnd"
            :lang="lang"
            :lang-info="langInfo"
            :show-year="endYear"
            :show-month="endMonth"
            :show-day="endDay"
            :show-hour="endHour"
            :show-minute="endMinute"
            @selected="selectedEnd"
          ></dataselect>
        </div>
      </div>
      <div class="btn">
        <div @click='sure'>
          {{ t("sure") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataselect from "./select.vue";
import clickOutSide from "../../directives/clickoutside.js";
export default {
  name: "datepicker",
  components: {
    dataselect,
  },
  directives: {
    clickOutSide
  },
  props: {
    start: {
      type: Array | String,
      default() {
        return [2020, 1, 1, -1, 0];
      },
    },
    end: {
      type: Array | String,
      default() {
        return [2021, 1, 31, -1, 59];
      },
    },
    maxStart: {
      type: Array,
      default() {
        return [2011, 1, 1, 0, 0];
      },
    },
    maxEnd: {
      type: Array,
      default() {
        return [2031, 12, 31, 23, 59];
      },
    },
    lang: {
      type: String,
      default: "zh",
    },
    langInfo: {
      type: Object,
      default() {
        return {
          zh: {
            start: " 开始时间",
            end: "结束时间",
            sure: "确定",
            hour: "时",
            minute: "分",
            w0: "日",
            w1: "一",
            w2: "二",
            w3: "三",
            w4: "四",
            w5: "五",
            w6: "六",
            m1: "1月",
            m2: "2月",
            m3: "3月",
            m4: "4月",
            m5: "5月",
            m6: "6月",
            m7: "7月",
            m8: "8月",
            m9: "9月",
            m10: "10月",
            m11: "11月",
            m12: "12月",
          },
          en: {
            start: "start time",
            end: "end time",
            sure: "sure",
            hour: "hour",
            minute: "minute",
            sun: "Sun",
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat",
            m1: "Jan",
            m2: "Feb",
            m3: "Mar",
            m4: "Apr",
            m5: "May",
            m6: "Jun",
            m7: "Jul",
            m8: "Aug",
            m9: "Sep",
            m10: "Oct",
            m11: "Nov",
            m12: "Dec",
          },
        };
      },
    },
  },
  computed: {
    startStr() {
      return this.getDateStr("startArray");
    },
    endStr() {
      return this.getDateStr("endArray");
    },
  },
  data() {
    return {
      selectType: 0,
      startYear: -1,
      startMonth: -1,
      startDay: -1,
      startHour: -1,
      startMinute: -1,
      endYear: -1,
      endMonth: -1,
      endDay: -1,
      endHour: -1,
      endMinute: -1,
      startArray: [],
      endArray: [],
      fromShow: false,
      endShow: false
    };
  },
  methods: {
    t(keypath) {
      const o = this.langInfo[this.lang] || {};
      const keys = keypath.split(".");
      let r = o;
      let key;
      for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        if (key && typeof r === "object") {
          r = r[key];
        }
      }
      return r || "";
    },
    getDateStr(type) {
      const show = this[type].findIndex((item) => item * 1 < 0);
      if (show !== -1) {
        return "";
      }
      const year = this[type][0];
      const month = this.lessTen(this[type][1]);
      const day = this.lessTen(this[type][2]);
      const hour = this.lessTen(this[type][3]);
      const minute = this.lessTen(this[type][4]);
      return `${year}-${month}-${day} <span class='bar2'></span> ${hour}:${minute}`;
    },
    lessTen(str) {
      return str * 1 < 10 ? "0" + str : str;
    },
    selectedFrom(date) {
      this.startArray = date
      this.fromShow = false
    },
    selectedEnd(date) {
      this.endArray = date
      this.endShow = false
    },
    show (type) {
      if (!type) {
        this.fromShow = true
      } else {
        this.endShow = true
      }
    },
    hide (type) {
      if (type*1) {
        this.endShow = false
        } else {
        this.fromShow = false
      }
    },
    sure () {
      console.log('sure',this.startArray,this.endArray)
      this.$emit('sure',this.startArray,this.endArray)
    }
  },
  watch: {
    start: {
      deep: true,
      immediate: true,
      handler(n) {
        this.startYear = this.start[0];
        this.startMonth = this.start[1];
        this.startDay = this.start[2];
        this.startHour = this.start[3];
        this.startMinute = this.start[4];
        this.startArray = this.start;
      },
    },
    end: {
      deep: true,
      immediate: true,
      handler(n) {
        this.endYear = this.end[0];
        this.endMonth = this.end[1];
        this.endDay = this.end[2];
        this.endHour = this.end[3];
        this.endMinute = this.end[4];
        this.endArray = this.end;
      },
    },
  },
  ready() {},
};
</script>
<style lang="less" scoped>
.ali_date_picker {
  .head {
    display: flex;
    width: 470px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background:rgba(255, 255, 255, 1);
    .times {
      display: flex;
      .bar1 {
        width: 15px;
        height: 1px;
        background: #d0d0d0;
        margin: 11px 9px 0; 
      }
      .time {
        position: relative;
        .show-time {
          cursor: pointer;
          border: 0.5px solid #d0d0d0;
          border-radius: 4px;
          width: 161px;
          height: 22.46px;
          text-align: center;
          line-height: 22.46px;
          font-size: 14px;
          color: #2E4CF4;
        }
        .choose-time {
          cursor: pointer;
          display: flex;
          border: 0.5px solid #d0d0d0;
          border-radius: 4px;
          align-items: center;
          justify-content: center; 
          width: 161px;
          height: 22.46px;
          font-size: 14px;
          .img img{
            width: 16px;
            height: 16px;
            position: relative;
            top: 2.5px;
          }
          .text {
            margin-left: 7px;
          } 
        }
        .select {
          position: absolute;
          top: 40px;
        }
      }
    }
    .btn {
      cursor: pointer;
      width: 53px;
      height: 22.46px;
      background:rgba(46,76,244,1);
      border-radius:4px;
      text-align: center;
      line-height: 22.46px;
      font-size: 14px;
      color: #FFF;
      margin-left: 31px;
    }
  }
}
</style>
