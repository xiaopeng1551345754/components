<template>
  <area :list="list" @select-node="selectNode"></area>
</template>
<script>
  export default  {
    data() {
      return {
        list: [
          {
            name: '中国',
            id: 'china',
            type: 'country',
            children: [
              {
                name: '北京',
                id: 'BeiJing',
                type: 'province',
                children: [
                  {
                    name: '朝阳区', 
                    id: 'district',
                    type: 'district'
                  },
                  {
                    name: '昌平区', 
                    id: 'district',
                    type: 'district'
                  },
                  {
                    name: '东城区', 
                    id: 'district',
                    type: 'district'
                  }
                ]
              },
              {
                name: '山东',
                id: 'shandong',
                type: 'province'
              },
              {
                name: '河北',
                id: 'Hebei',
                type: 'province'
              }
            ]
          },
          {
            name: '美国',
            id: 'USA',
            type: 'country'
          },
          {
            name: '英国',
            id: 'US',
            type: 'country'
          },
          {
            name: '中国',
            id: 'china',
            type: 'country'
          }
        ]
      }
    },
    methods: {
      //  暴露事件方法
      selectNode(country, provice, city) {
        console.log(country, provice, city)
      },
      getResult () {
        // 返回的国省市
      }
    }
  }
</script>
