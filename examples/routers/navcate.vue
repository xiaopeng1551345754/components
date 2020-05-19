<template>
  <nav-cate :menu-list="menuList" @select="selectNode"></nav-cate>
</template>
<script>
  export default  {
    data() {
      return [
        {
          name: '车分类',
          id: 'car_111111111',
          children: [
            {
              id: 'car_222222',
              name: '车二级分类'
            },
            {
              id: 'car_333',
              name: '车二级分类',
              children: [
                {
                  id: 'car_333',
                  name: '三级分类'
                },
                {
                  id: 'car_333',
                  name: '三级分类'
                }
              ]
            }
          ]
        },
        {
          name: '车分类',
          id: 'car_111111111',
          children: [
            {
              id: 'car_222222',
              name: '车二级分类'
            }
          ]
        },
        {
          name: '车分类',
        }
      ]
    },
    methods: {
      //  暴露事件方法
      selectNode(node) {
        console.log(node)
      }
    }
  }
</script>
