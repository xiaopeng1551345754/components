<template>
  <tablelist :table-list="tableList"
             style="width: 1088px;"
             @changestatus="changestatus"
             @viewdetail="viewdetail"
             @handle="handle"
             @deleteitem="deleteitem"
             @notice="notice"></tablelist>
</template>
<script>
export default {
  data () {
    return {
      tableList: [
        [
          {
            id: 1,
            name: '项目名称',
            label: 'name',
            width: '340'
          }, {
            id: 2,
            name: '项目负责人',
            label: 'leader',
            width: '102'
          }, {
            id: 3,
            name: '联系方式',
            label: 'phone',
            width: '122'
          }, {
            id: 4,
            name: '处理状态',
            label: 'status',
            width: '108'
          }, {
            id: 5,
            name: '公开',
            label: 'isPublic',
            width: '92'
          }, {
            id: 6,
            name: '操作',
            label: 'handle',
            width: '324'
          }
        ],
        [
          {
            name: "结束就看你曾经看快",
            leader: '李华',
            phone: '13622333333',
            status: 1, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#BFBFBF',
                width: '60'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '已通知专家',
                background: '#FFFFFF',
                color: '#3480FF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你",
            leader: '李华',
            phone: '13622333333',
            status: 2, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你就就是你曾经蝴蝶结考试成绩的考生那就是你曾经的",
            leader: '李华',
            phone: '13622333333',
            status: 3, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: true, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你就就是你曾经保持绝对是白菜价",
            leader: '李华',
            phone: '13622333333',
            status: 1, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始",
            leader: '李华',
            phone: '13622333333',
            status: 3, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: true, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你就就是你曾经不定时举办超级多",
            leader: '李华',
            phone: '13622333333',
            status: 1, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九",
            leader: '李华',
            phone: '13622333333',
            status: 2, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代",
            leader: '李华',
            phone: '13622333333',
            status: 3, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: true, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你胆结石不吃醋大家能见到你曾经",
            leader: '李华',
            phone: '13622333333',
            status: 1, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: false, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          },
          {
            name: "结束就看你曾经看快九十年代就开始你就就是你曾经",
            leader: '李华',
            phone: '13622333333',
            status: 3, // 1: 组队中 2: 驳回 3: 通过,
            isPublic: true, // 1: 是  0: 否
            handle: [
              {
                name: '查看',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '处理',
                background: '#fff',
                color: '#595959',
                width: '60',
                disabled: 'disabled'
              }, {
                name: '删除',
                background: '#fff',
                color: '#595959',
                width: '60'
              }, {
                name: '通知专家',
                background: '#3480FF',
                color: '#FFFFFF',
                width: '88'
              }
            ]
          }
        ]
      ]
    }
  },
  methods: {
    changestatus (data) {
      // console.log(data);
    },
    viewdetail (data) {
      // console.log(data, 'view');
    },
    handle (data) {
      // console.log(data, 'handle');
    },
    deleteitem (data) {
      // console.log(data, 'delete');
    },
    notice (data) {
      // console.log(data, 'notice');
    }
  }

}
</script>
<style lang="less" scoped>
</style>