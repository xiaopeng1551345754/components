<template>
  <div class="select">
    <div class="head">
      <div class="left icon" @click="prev">
        <img src="./image/left.png" />
      </div>
      <div class="date">
        {{ showYear }}
        <span v-if="lang === 'zh'">年</span>
        {{ t(langMap[showMonth * 1 - 1]) }}
      </div>
      <div class="right icon" @click="next">
        <img src="./image/left.png" />
      </div>
    </div>
    <div class="content">
      <div class="weeks">
        <div class="week item" v-for="(idx, item) in weekMap" :key="idx">
          {{ t(item) }}
        </div>
      </div>
      <div class="days">
        <div
          class="day none item"
          v-for="(idx, item) in dates.startWeek"
          :key="idx"
        >
          {{ dates.lastDays - dates.startWeek + item + 1 }}
        </div>
        <div
          class="day item"
          v-for="(idx, item) in dates.days"
          :key="idx"
          :class="{
            today:
              now[0] == showYear && now[1] == showMonth && now[2] == item + 1,
            selected:
              select[0] == showYear &&
              select[1] == showMonth &&
              select[2] == item + 1,
          }"
          @click="selectThisDay(item + 1)"
        >
          {{ (item + 1) | lessTen }}
        </div>
        <div
          class="day none item"
          v-for="(idx, item) in 6 - dates.endWeek"
          :key="idx"
        >
          {{ (item + 1) | lessTen }}
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="times">
        <div class="hour btn" @click="changeShow(0)">
          {{
            selectHour > -1
              ? selectHour < 10
                ? "0" + selectHour
                : selectHour
              : t("hour")
          }}
          <div class="select" v-show="hourShow">
            <div
              class="item"
              v-for="item in 24"
              :key="item"
              @click="selectTime(0, item)"
              :class="{ selected: selectHour == item }"
            >
              {{ item | lessTen }}
            </div>
          </div>
        </div>
        <div class="bar3">:</div>
        <div class="minute btn" @click="changeShow(1)">
          {{
            selectMinute > -1
              ? selectMinute < 10
                ? "0" + selectMinute
                : selectMinute
              : t("minute")
          }}
          <div class="select" v-show="minuteShow">
            <div
              class="item"
              v-for="item in 60"
              :key="item"
              @click="selectTime(1, item)"
              :class="{ selected: selectMinute == item }"
            >
              {{ item | lessTen }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue from "Vue";
export default {
  name: "dataselect",
  props: {
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
        return {};
      },
    },
    showYear: {
      type: Number,
      default: new Date().getFullYear(),
    },
    showMonth: {
      type: Number,
      default: new Date().getMonth() + 1,
    },
    showDay: {
      type: Number,
      default: new Date().getDate(),
    },
    showHour: {
      type: Number,
      default: -1,
    },
    showMinute: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    dates() {
      const startWeek = new Date(
        this.showYear * 1,
        this.showMonth * 1 - 1,
        1
      ).getDay();
      const days = new Date(this.showYear * 1, this.showMonth * 1, 0).getDate();
      const endWeek = new Date(
        this.showYear * 1,
        this.showMonth * 1 - 1,
        days
      ).getDay();
      const lastDays = new Date(
        this.showYear * 1,
        this.showMonth * 1 - 1,
        0
      ).getDate();
      const obj = {
        startWeek,
        days,
        endWeek,
        lastDays,
      };
      return obj;
    },
  },
  data() {
    return {
      now: new Date().toLocaleDateString().split("/"),
      langMap: [],
      weekMap: [],
      select: [-1, -1, -1],
      selectHour: -1,
      selectMinute: -1,
      minuteShow: false,
      hourShow: false,
    };
  },
  methods: {
    t(keypath) {
      const o = this.langInfo[this.lang] || {};
      let keys;
      if (Array.isArray(keypath)) {
        keys = keypath.split(".");
      } else {
        keys = [keypath];
      }
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
    selectThisDay(item) {
      this.select = [this.showYear, this.showMonth, item];
      this.checkDate();
    },
    selectTime(type, item) {
      if (!type) {
        this.selectHour = item;
      } else {
        this.selectMinute = item;
      }
      this.checkDate();
    },
    changeShow(type) {
      if (!type) {
        this.hourShow = !this.hourShow;
      } else {
        this.minuteShow = !this.minuteShow;
      }
    },
    prev() {
      if (this.showMonth > 1) {
        this.showMonth--;
      } else {
        this.showYear--;
        this.showMonth = 12;
      }
    },
    next() {
      if (this.showMonth < 12) {
        this.showMonth++;
      } else {
        this.showYear++;
        this.showMonth = 1;
      }
    },
    checkDate() {
      if (
        this.selectHour !== -1 &&
        this.selectMinute !== -1 &&
        this.select.findIndex((item) => item === -1) == -1
      ) {
        this.$emit("selected", [
          ...this.select,
          this.selectHour,
          this.selectMinute,
        ]);
      }
    },
  },
  filters: {
    lessTen(str) {
      return str * 1 < 10 ? "0" + str : str;
    },
  },
  ready() {
    for (let i = 1; i < 13; i++) {
      this.langMap.push("m" + i);
    }
    for (let i = 0; i < 7; i++) {
      this.weekMap.push("w" + i);
    }
    this.select = [this.showYear, this.showMonth, this.showDay];
    this.selectHour = this.showHour;
    this.selectMinute = this.showMinute;
  },
  watch: {
    showYear (n) {
      this.select = [this.showYear, this.showMonth, this.showDay];
    },
    showMonth (n) {
      this.select = [this.showYear, this.showMonth, this.showDay];
    },
    showDay (n) {
      this.select = [this.showYear, this.showMonth, this.showDay];
    },
    showHour (n) {
      this.selectHour = this.showHour;
    },
    showMinute (n) {
      this.selectMinute = this.showMinute;
    }
  }
};
</script>

<style lang="less" scoped>
.select {
  width: 280px;
  background: #fff;
  user-select: none;
  .head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0;
    & > div {
      flex-shrink: 0;
    }
    .icon {
      width: 7px;
      height: 10px;
      cursor: pointer;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
    }
    .left {
      margin-left: 50px;
    }
    .right {
      transform: rotate(180deg);
      margin-right: 50px;
    }
    .date {
      font-size: 14px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      text-shadow: 0px 12px 48px rgba(0, 0, 0, 0.03);
    }
  }
  .content {
    padding: 16px 12px 6px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    .weeks,
    .days {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      width: 26px;
      margin: 0 0 10px 12px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      line-height: 26px;
      text-shadow: 0px 12px 48px rgba(0, 0, 0, 0.03);
      flex-grow: 1;
      text-align: center;
    }
    .days {
      .item {
        cursor: pointer;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
      }
      .today {
        color: rgba(255, 106, 0, 1);
      }
      .selected {
        background: rgba(46, 76, 244, 1);
        box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03);
        border-radius: 2px;
        color: #fff;
        font-weight: 500;
      }
      .none {
        color: rgba(0, 0, 0, 0.25);
        cursor: text;
      }
    }
  }
  .foot {
    padding: 8px 16px;
    .times {
      display: flex;
    }
    .btn {
      width: 50px;
      height: 24px;
      box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03);
      border-radius: 4px;
      border: 1px solid rgba(208, 208, 208, 1);
      font-size: 14px;
      font-weight: 400;
      color: rgba(89, 89, 89, 1);
      line-height: 24px;
      text-shadow: 0px 12px 48px rgba(0, 0, 0, 0.03);
      padding: 2px;
      text-align: center;
      position: relative;
      cursor: pointer;
      .select {
        position: absolute;
        top: 102%;
        width: 100%;
        left: 0;
        height: 96px;
        overflow: auto;
        box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(208, 208, 208, 0.3);
        border-radius: 4px;
        &::-webkit-scrollbar {
          display: none;
        }
        .item {
          padding: 2px 4px;
          cursor: pointer;
          color: rgba(89, 89, 89, 1);
          & + .item {
            border-top: 1px solid rgba(0, 0, 0, 0.03);
          }
        }
        .selected {
          color: rgba(46, 76, 244, 1);
        }
      }
    }
    .bar3 {
      width: 20px;
      text-align: center;
      line-height: 28px;
    }
  }
}
</style>
