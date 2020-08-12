<template>
  <div class="wrap">
    <button @click="cli">cli</button>
    <r3checked
      :default-data="defaultData"
      :event-type="eventType"
      :list="list"
      :level="level"
      @select="selectNode"
    ></r3checked>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventType: 'click',//hover
      defaultData: [
        {
          id: "car_31",
          name: "1-2-1三级分类",
        }
      ],
      level: 3,
      list: [
        {
          name: "1车分类1",
          id: "car_11",
          children: [
            {
              id: "car_21",
              name: "1-1车二级分类字数超多",
              children: [
                {
                  id: "car_111",
                  name: "1-1-1三级分类"
                },
                {
                  id: "car_112",
                  name: "1-1-2三级分类"
                },]
            },
            {
              id: "car_22",
              name: "1-2车二级分类",
              children: [
                {
                  id: "car_31",
                  name: "1-2-1三级分类"
                },
                {
                  id: "car_32",
                  name: "1-2-2三级分类"
                },
                {
                  id: "car_33",
                  name: "1-2-3三级分类"
                },
                {
                  id: "car_34",
                  name: "1-2-4三级分类"
                }
              ]
            },
            {
              id: "car_23",
              name: "1-3车二级分类字数超多"
            }, {
              id: "car_24",
              name: "1-4车二级分类字数超多"
            },
          ]
        },
        {
          name: "2车分类2",
          id: "car_12",
          children: [
            {
              id: "car_222222",
              name: "2-1车二级分类"
            }
          ]
        }
      ]
    };
  },
  methods: {
    //  暴露事件方法
    selectNode(thr, sec, fir) {
      console.log(thr, sec, fir);
    },
    cli() {
      this.list = [
        {
          name: "车分类1",
          id: "car_11",
          children: [
            {
              id: "car_21",
              name: "车二级分类字数超多11",
            },
            {
              id: "car_22",
              name: "车二级分类12",
              children: [
                {
                  id: "car_31",
                  name: "三级分类121"
                },
                {
                  id: "car_32",
                  name: "三级分类122"
                },
                {
                  id: "car_33",
                  name: "三级分类123"
                },
                {
                  id: "car_34",
                  name: "三级分类124"
                }
              ]
            },
            {
              id: "car_23",
              name: "车二级分类字数超多13"
            }, {
              id: "car_24",
              name: "车二级分类字数超多14"
            },
          ]
        },
        {
          name: "车分类2",
          id: "car_12",
          children: [
            {
              id: "car_222222",
              name: "车二级分类"
            }
          ]
        }
      ]
    }
  },
  ready() {
    // this.cli()
  }
};
</script>
