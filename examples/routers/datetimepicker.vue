<template>
  <div>
    <input type="text"
           :value="selectDate"
           readonly
           @focus="focus">
    <datetimepicker :visible.sync="visible"
                    :date-list="dateList"
                    :default-date="selectDate"
                    @confirm="confirm"
                    @cancel="cancel"></datetimepicker>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectDate: '2020-08-09: 00:30',
      visible: false,
      dateList: [
        [{
          name: '2020-08-01'
        }, {
          name: '2020-08-02'
        }, {
          name: '2020-08-03'
        }, {
          name: '2020-08-04'
        }, {
          name: '2020-08-05'
        }, {
          name: '2020-08-06'
        }, {
          name: '2020-08-07'
        }, {
          name: '2020-08-08'
        }, {
          name: '2020-08-09'
        }, {
          name: '2020-08-10'
        }, {
          name: '2020-08-11'
        }, {
          name: '2020-08-12'
        }, {
          name: '2020-08-13'
        }, {
          name: '2020-08-14'
        }, {
          name: '2020-08-15'
        }, {
          name: '2020-08-16'
        }, {
          name: '2020-08-17'
        }, {
          name: '2020-08-18'
        }, {
          name: '2020-08-19'
        }, {
          name: '2020-08-20'
        }, {
          name: '2020-08-21'
        }, {
          name: '2020-08-22'
        }, {
          name: '2020-08-23'
        }, {
          name: '2020-08-24'
        }, {
          name: '2020-08-25'
        }, {
          name: '2020-08-26'
        }, {
          name: '2020-08-27'
        }, {
          name: '2020-08-28'
        }, {
          name: '2020-08-29'
        }, {
          name: '2020-08-30'
        }, {
          name: '2020-08-31'
        }],
        [{
          name: '00:00'
        }, {
          name: '00:30'
        }, {
          name: '01:00'
        }, {
          name: '01:30'
        }, {
          name: '02:00'
        }, {
          name: '02:30'
        }, {
          name: '03:00'
        }, {
          name: '03:30'
        }, {
          name: '04:00'
        }, {
          name: '04:30'
        }, {
          name: '05:00'
        }, {
          name: '05:30'
        }, {
          name: '06:00'
        }, {
          name: '06:30'
        }, {
          name: '07:00'
        }, {
          name: '07:30'
        }, {
          name: '08:00'
        }, {
          name: '08:30'
        }, {
          name: '09:00'
        }, {
          name: '09:30'
        }, {
          name: '10:00'
        }, {
          name: '10:30'
        }, {
          name: '11:00'
        }, {
          name: '11:30'
        }, {
          name: '12:00'
        }, {
          name: '12:30'
        }, {
          name: '13:00'
        }, {
          name: '13:30'
        }, {
          name: '14:00'
        }, {
          name: '14:30'
        }, {
          name: '15:00'
        }, {
          name: '15:30'
        }]
      ]
    }
  },
  methods: {
    formatter () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;    //js从0开始取 
      var date1 = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      if (month < 10) {
        month = `0${month}`;
      }
      if (date1 < 10) {
        data1 = `0${data1}`;
      }
      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return `${year}-${month}-${date1} ${hour}:${minutes}`;
    },
    focus () {
      this.visible = true;
    },
    confirm (date) {
      this.selectDate = date;
    },
    cancel () {
    }
  }
}
</script>
<style lang="less" scoped>
input {
  outline: none;
}
</style>
