<template>
  <ronglvtable :data-list="dataList"></ronglvtable>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        [
          // {
          //   name: '证券简称',
          //   label: 'name',
          // },
          {
            name: '证券代码',
            label: 'index',
          },
          // {
          //   name: '等级',
          //   label: 'level'
          // },
          // {
          //   name: '发布时间',
          //   label: 'time'
          // },
          {
            name: '融绿一级行业',
            label: 'company'
          },
          {
            name: '风险类型',
            label: 'type'
          }, {
            name: '事件概述',
            label: 'overview'
          }, {
            name: '来源类别',
            label: 'source'
          },
          {
            name: '事件跟踪',
            label: 'trace'
          }
        ],
        [
          {
            overview: '因违反环境影响评价制度遭到相关部门罚款10万好的借口撒谎的你的撒娇开裆裤随处可见的事阿看到你健身卡',
            index: '',
            level: '高',
            time: '2020/06/13',
            company: '房地产',
            type: '环境',
            source: '媒体',
            trace: '有媒体',
            name: '中国平安',
          },
          {
            type: '环境',
            overview: '因违反环境影响评价制度遭到相关部门罚款10万妇女节快打死你放假可能的事',
            source: '监管',
            trace: '',
            name: '中国平安',
            index: '0001.HK',
            level: '',
            time: '2020/06/13',
            company: '房地产'
          },
          {
            name: '中国平安',
            index: '0001.HK',
            level: '高',
            type: '社会',
            overview: '因违反环境影响评价制度遭到相关部门罚款10万大脑神经可能分开几点能吃',
            source: '媒体',
            trace: '',
            time: '2020/06/13',
            company: '房地产',
          }
        ]
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
