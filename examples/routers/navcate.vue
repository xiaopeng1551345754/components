<template>
  <nav-cate :default-data="defaultData" :event-type="eventType" :menu-list="menuList" @select="selectNode"></nav-cate>
</template>
<script>
export default {
  data() {
    return {
      eventType:'click',
      defaultData:[
        {
          id: "car_11",
          name: "车分类",
        },
        {
          id: "car_22",
          name: "车分类",
        },
        {
          id: "car_31",
          name: "车分类",
        }
      ],
      menuList: {
        level: 3,
        list: [
          {
            name: "车分类",
            id: "car_11",
            children: [
              {
                id: "car_21",
                name: "车二级分类字数超多"
              },
              {
                id: "car_22",
                name: "车二级分类",
                children: [
                  {
                    id: "car_31",
                    name: "三级分类"
                  },
                  {
                    id: "car_32",
                    name: "三级分类"
                  },
                  {
                    id: "car_33",
                    name: "三级分类"
                  },
                  {
                    id: "car_34",
                    name: "三级分类"
                  }
                ]
              }
            ]
          },
          {
            name: "车分类",
            id: "car_12",
            children: [
              {
                id: "car_222222",
                name: "车二级分类"
              }
            ]
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          },
          {
            name: "车分类"
          }
        ]
      }
    };
  },
  methods: {
    //  暴露事件方法
    selectNode(node) {
      console.log(node);
    }
  }
};
</script>
