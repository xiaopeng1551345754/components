<template>
  <tablelist :table-list="tableList"
             @changestatus="changestatus"
             @clickbtn="clickbtn"></tablelist>
</template>
<script>
export default {
  data () {
    return {
      tableList: [
        [
          {
            name: '编号',
            label: 'id',
            width: '50',
            textAlign: 'center'
          },
          {
            name: '姓名',
            label: 'name',
            width: '150',
            textAlign: 'center'
          },
          {
            name: '电话号码',
            label: 'number',
            width: '150',
            textAlign: 'center'
          },
          {
            name: '家庭住址',
            label: 'address',
            width: '250',
            textAlign: 'left'
          },
          {
            name: '公开信息',
            label: 'public',
            type: 'switch',
            width: '100',
            textAlign: 'center'
          },
          {
            name: '操作',
            label: 'button',
            width: '250',
            textAlign: 'center'
          }
        ],
        [
          {
            id: 1,
            name: '小明',
            number: '12432436547',
            address: '内存卡就是对你曾经看',
            button: [
              {
                name: '编辑',
                background: '#598ABE',
                color: '#fff',
                bdcolor: '#598ABE',
                width: '56'
              }
            ],
            public: true
          },
          {
            id: 1,
            name: '小明',
            number: '12432436547',
            address: '内存卡就是对你曾经看你打开就是你吃亏的就是你曾经就开始吃亏的是你曾经看',
            button: [
              {
                name: '编辑',
                background: '#598ABE',
                color: '#fff',
                bdcolor: '#598ABE',
                width: '56'
              }
            ],
            public: true,
            hsjdhf: 'nfkdnvk'
          },
          {
            id: 1,
            name: '小明',
            number: '12432436547',
            // address: '内存卡就是对你曾经看',
            button: [
              {
                name: '编辑',
                background: '#598ABE',
                color: '#fff',
                bdcolor: '#598ABE',
                width: '56'
              }
            ],
            public: false,
            hsjdhf: 'nfkdnvk'
          },
          {
            id: 1,
            name: '小明',
            number: '12432436547',
            address: '内存卡就是对你曾经看',
            button: [
              {
                name: '编辑',
                background: '#598ABE',
                color: '#fff',
                bdcolor: '#598ABE',
                width: '56'
              }
            ],
            public: true,
            hsjdhf: 'nfkdnvk'
          },
          {
            id: 1,
            name: '小明',
            number: '12432436547',
            address: '内存卡就是对你曾经看',
            button: [
              {
                name: '编辑',
                background: '#598ABE',
                color: '#fff',
                bdcolor: '#598ABE',
                width: '56'
              }
            ],
            public: false,
            hsjdhf: 'nfkdnvk'
          }
        ]
      ]
    }
  },
  methods: {
    changestatus (data) {
      // console.log(data, '点击开关');
    },
    clickbtn (data, btn) {
      // console.log(data, btn, '点击按钮');
    }
  }

}
</script>
<style lang="less" scoped>
</style>