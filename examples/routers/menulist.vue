<template>
  <menulist :menu-list="menulist"></menulist>
</template>
<script>
export default {
  data () {
    return {
      menulist: [
        {
          id: 0,
          name: "这是一个一级菜单",
          value: "这是一个一级菜单",
          show: false,
          showInput: false,
          level: 1,
          children: [{
            id: 10,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个二级菜单",
            show: false,
            showInput: false,
          }, {
            id: 11,
            show: false,
            showInput: false,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个一级菜单",
          }, {
            id: 12,
            show: false,
            showInput: false,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个二级菜单",
          }]
        },
        {
          id: 1,
          name: "这是一个一级菜单",
          value: "这是一个一级菜单",
          show: false,
          showInput: false,
          level: 1,
          children: [{
            id: 13,
            show: false,
            showInput: false,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个二级菜单",
          }, {
            id: 14,
            show: false,
            showInput: false,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个二级菜单",
          }, {
            id: 15,
            show: false,
            showInput: false,
            level: 2,
            name: "这是一个二级菜单",
            value: "这是一个二级菜单",
          }]
        },
        {
          show: false,
          showInput: false,
          id: 2,
          level: 1,
          name: "这是一个一级菜单",
          value: "这是一个一级菜单",
          children: []
        }
      ]

    }
  }
}
</script>
<style lang="less" scoped>
</style>
