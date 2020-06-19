<template>
  <div class="hxk_date_wrap">
    <div class="head" :class="{ chooseYear: chooseYear }">
      <div class="date" @click="showChooseYear">
        <div class="text">{{ year }}年{{ month }}月</div>
        <div class="control">
          <img src="./images/bottom.png" alt="bottom" />
        </div>
      </div>
      <div class="controls">
        <div class="icon left" @click="prev">
          <img src="./images/bottom.png" alt="prev" />
        </div>
        <div class="icon right" @click="next">
          <img src="./images/bottom.png" alt="next" />
        </div>
      </div>
    </div>
    <div class="weeks" v-show="!chooseYear">
      <div class="item week" v-for="(idx, week) in weeks" :key="idx">
        {{ week }}
      </div>
    </div>
    <div class="days" v-show="!chooseYear">
      <div class="item none" v-for="none in days.startWeek" :key="none"></div>
      <div
        class="item day"
        v-for="(idx, day) in days.days"
        :key="idx"
        :class="{ normal: day.type === 'normal', selected: selectedTimes[day.time] && selectShape === 'square', selectedCircle: selectedTimes[day.time] && selectShape === 'circle'}"
        :style="{
          background: selectedTimes[day.time] ? selectedColor : '',
          color: selectedTimes[day.time] ? '#fff' : '',
        }"
        @click="selectThis(day)"
      >
        <div class="num">
          {{ idx + 1 }}
        </div>
        <div class="text" v-if='bottomText' :style="{ color: day.color }">
          {{ day.text || noneText }}
        </div>
        <div class='dot' v-if='!bottomText && day.text' :style="{ background: selectedTimes[day.time] && selectShape === 'circle' && day.color ? '#fff':day.color}"></div>
        <div class="dot" v-if='!bottomText && !day.text'>

        </div>
      </div>
      <div class="item none" v-for="none in 6 - days.endWeek" :key="none"></div>
    </div>
    <div class="chooseYearModal" v-show="chooseYear">
      <div class="years">
        <div
          class="year"
          v-for="yearItem in endArr[0] - startArr[0] + 1"
          :key="yearItem"
          :style="{
            background: startArr[0] + yearItem === year ? selectedColor : '',
            color: startArr[0] + yearItem === year ? '#fff' : '',
          }"
          @click="selectYear(startArr[0] + yearItem)"
        >
          {{ startArr[0] + yearItem }}
        </div>
      </div>
      <div class="months">
        <div
          class="month"
          :class="{ disabled: monthItem.type === 'disabled' }"
          v-for="monthItem in months"
          :key="monthItem.month"
          :style="{
            borderColor: monthItem.month === month ? selectedColor : '',
            color: monthItem.month === month ? selectedColor : '',
          }"
          @click="selectMonth(monthItem)"
        >
          {{ monthItem.month }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hxkdate",
  props: {
    start: {
      type: String,
      default() {
        return new Date().toISOString().substr(0, 7);
      },
    },
    end: {
      type: String,
      default() {
        let now = new Date().toISOString().substr(0, 7).split("-");
        now[1] = now[1] * 1 + 2;
        return now.join("-");
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    selectedColor: {
      type: String,
      default: "#ED8639",
    },
    noneText: {
      type: String,
      default: "未开放",
    },
    showList: {
      type: Array,
      default() {
        return [];
      },
    },
    default: {
      type: Array,
      default() {
        return [];
      },
    },
    bestDisabled: {
      type: Boolean,
      default: true
    },
    bottomText: {
      type: Boolean,
      defaule: true
    },
    selectShape: {
      type: String,
      default: "square"
    }
  },
  computed: {
    startArr() {
      // 初始化日期切割数组,方便使用
      return this.start.split("-").map((item) => (item *= 1));
    },
    endArr() {
      // 初始化日期切割数组,方便使用
      return this.end.split("-").map((item) => (item *= 1));
    },
    days() {
      const startWeek = new Date(this.year, this.month - 1, 1).getDay();
      const allDay = new Date(this.year, this.month, 0).getDate();
      const endWeek = new Date(
        this.year,
        this.month - 1,
        allDay
      ).getDay();
      let days = [];
      for (let i = 1; i < allDay + 1; i++) {
        const time = this.year + "-" + this.month + "-" + i;
        const data = this.showList.find((item) => item.time === time);
        if (data) {
          days.push(data);
        } else {
          if (this.bestDisabled) {
            days.push({
              time,
              selected: false,
            });
          } else {
            days.push({
              time,
              selected: false,
              type: 'normal'
            });
          }
        }
      }
      const obj = {
        startWeek,
        days,
        endWeek
      };
      return obj;
    },
    months() {
      // 获取月份的可用状态
      let months = [];
      if (this.startArr[0] < this.year && this.year < this.endArr[0]) {
        // 如果年大于起始,小于结束,全部正常
        for (let i = 1; i < 13; i++) {
          months.push({
            type: "normal",
            month: i,
          });
        }
      } else if (
        this.startArr[0] === this.year &&
        this.year === this.endArr[0]
      ) {
        // 如果年等于起始,等于结束,选取中间月份
        for (let i = 1; i < 13; i++) {
          if (this.startArr[1] <= i && i <= this.endArr[1]) {
            months.push({
              type: "normal",
              month: i,
            });
          } else {
            months.push({
              type: "disabled",
              month: i,
            });
          }
        }
      } else if (this.startArr[0] === this.year) {
        // 如果等于起始,选取大于月份
        for (let i = 1; i < 13; i++) {
          if (this.startArr[1] <= i) {
            months.push({
              type: "normal",
              month: i,
            });
          } else {
            months.push({
              type: "disabled",
              month: i,
            });
          }
        }
      } else if (this.endArr[0] === this.year) {
        // 如果等于结束,选取小于月份
        for (let i = 1; i < 13; i++) {
          if (i <= this.endArr[1]) {
            months.push({
              type: "normal",
              month: i,
            });
          } else {
            months.push({
              type: "disabled",
              month: i,
            });
          }
        }
      }
      return months;
    },
  },
  data() {
    return {
      year: 0,
      month: 0,
      selected: [],
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      chooseYear: false,
      selectedTimes: {},
    };
  },
  methods: {
    prev() {
      // 切换上个月,判断上个月是否在区间,判断当前月是否为一月
      if (
        this.year < this.startArr[0] ||
        (this.year === this.startArr[0] && this.month - 1 < this.startArr[1])
      ) {
        return;
      }
      if (this.month > 1) {
        this.month--;
      } else {
        this.month = 12;
        this.year--;
      }
    },
    next() {
      // 切换下个月,判断下个月是否在区间,判断当前月是否为十二月
      if (
        this.year > this.endArr[0] ||
        (this.year === this.endArr[0] && this.month + 1 > this.endArr[1])
      ) {
        return;
      }
      if (this.month < 12) {
        this.month++;
      } else {
        this.month = 1;
        this.year++;
      }
    },
    showChooseYear() {
      // 展示年月选择弹窗
      this.chooseYear = !this.chooseYear;
    },
    selectThis(day) {
      // 选中当前天,判断是单选还是多选
      if (day.type !== "normal") {
        return;
      }
      if (this.multiple) {
        const tar = this.selected.findIndex((item) => item.time === day.time);
        if (tar !== -1) {
          this.selected.splice(tar, 1);
        } else {
          this.selected.push(day);
        }
      } else {
        this.$set("selected", [day]);
      }
    },
    selectYear(year) {
      // 选中当前年,判断当前选中的月是否在区间
      this.year = year;
      if (year === this.startArr[0] && this.month < this.startArr[1]) {
        this.month = this.startArr[1];
      } else if (year === this.endArr[0] && this.month > this.endArr[1]) {
        this.month = this.endArr[1];
      }
      // this.chooseYear = false;
    },
    selectMonth(month) {
      // 选中当前月,判断当前月是否允许选中
      if (month.type === "normal") {
        this.month = month.month;
        this.chooseYear = false;
      }
    },
  },
  watch: {
    startArr: {
      deep: true,
      immediate: true,
      handler(n) {
        // 当初始化值变动的时候,重置当前年月
        if (n) {
          this.year = n[0] * 1;
          this.month = n[1] * 1;
        }
      },
    },
    default: {
      deep: true,
      immediate: true,
      handler(n) {
        // 当初始化值变动的时候,重置当前年月
        if (n) {
          this.selected = n.filter((item) =>
            this.showList.find((items) => items.time === item.time)
          );
        }
      },
    },
    selected: {
      deep: true,
      immediate: true,
      handler(n) {
        let map = {};
        this.selected.map((item) => {
          map[item.time] = true;
        });
        this.$set("selectedTimes", map);
        this.$emit("selected", n);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.hxk_date_wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  user-select: none;
  .head {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    flex-shrink: 0;
    .date {
      display: flex;
      align-items: center;
      cursor: pointer;
      .text {
        font-size: 17px;
        font-weight: 500;
        color: rgba(6, 26, 55, 0.85);
        line-height: 24px;
        text-shadow: 0px 2px 10px rgba(125, 126, 128, 0.16);
      }
      .control {
        position: relative;
        width: 11px;
        height: 8px;
        margin-left: 8px;
        transform: translateY(1px);
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
      }
    }
    .controls {
      display: flex;
      align-items: center;
      .icon {
        width: 11px;
        height: 8px;
        position: relative;
        cursor: pointer;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .left {
        transform: rotate(90deg);
      }
      .right {
        transform: rotate(-90deg);
        margin-left: 30px;
      }
    }
    &.chooseYear {
      box-shadow: 0px 4px 2px 0px rgba(125, 126, 128, 0.1);
      .date {
        .control {
          transition: .3s;
          transform: rotateX(-180deg);
        }
      }
    }
  }
  .item {
    width: 13.2%;
    text-align: center;
    font-size: 13px;
  }
  .weeks,
  .days {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .weeks {
    box-shadow: 0px 4px 2px 0px rgba(125, 126, 128, 0.1);
    .week {
      padding: 5px 0;
      line-height: 20px;
      text-shadow: 0px 2px 10px rgba(125, 126, 128, 0.16);
      color: rgba(6, 26, 55, 0.65);
    }
  }
  .days {
    color: rgba(6, 26, 55, 0.35);
    .day {
      border-radius: 6px;
      padding: 10px 0;
      cursor: default;
      transition: .1s;
      &.normal {
        cursor: pointer;
      }
      .num {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 16px;
      }
      .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: 8px auto 0;
      }
      .text {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 12px;
        margin-top: 6px;
      }
    }
    .normal {
      color: rgba(6, 26, 55, 0.85);
    }
    .selectedCircle {
      border-radius: 50%;
    }
  }
  .chooseYearModal {
    display: flex;
    text-align: center;
    flex-grow: 1;
    height: 1px;
    .years {
      width: 24%;
      flex-shrink: 0;
      border-right: 1px solid rgba(6, 26, 55, 0.06);
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .year {
        font-size: 15px;
        font-weight: 400;
        color: rgba(6, 26, 55, 0.85);
        line-height: 21px;
        padding: 12px 0;
        cursor: pointer;
        transition: .1s;
      }
    }
    .months {
      display: flex;
      flex-wrap: wrap;
      height: max-content;
      justify-content: space-around;
      width: 76%;
      padding: 20px 8px 0;
      align-self: center;
      .month {
        flex-grow: 0;
        width: 26.6%;
        line-height: 34px;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        cursor: pointer;
        transition: .1s;
        &.disabled {
          cursor: default;
          color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
