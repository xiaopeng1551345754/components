<template>
  <div>
    <button @click='init'>init</button>
    <area 
    v-ref:area
    :list="list" 
    :default-data="defaultData" @select-node="selectNode" 
    :lang='"en"'
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: [
        {
          name: "中国",
          id: "china1",
          type: "country"
        },
        {
          name: "北京",
          id: "BeiJing1",
          type: "province"
        },
        {
          name: "朝阳区",
          id: "district1",
          type: "city"
        }
      ],
      list: []
    };
  },
  ready() {
    this.list = [
        {
          name: "中国",
          id: "china1",
          type: "country",
          children: [
            {
              name: "北京",
              id: "BeiJing1",
              type: "province",
              children: [
                {
                  name: "朝阳区",
                  id: "district1",
                  type: "city"
                },
                {
                  name: "昌平区",
                  id: "city",
                  type: "city"
                },
                {
                  name: "东城区",
                  id: "city",
                  type: "city"
                }
              ]
            },
            {
              name: "山东",
              id: "shandong",
              type: "province"
            },
            {
              name: "河北",
              id: "Hebei",
              type: "province"
            }
          ]
        },
        {
          name: "美国",
          id: "USA",
          type: "country"
        },
        {
          name: "英国",
          id: "US",
          type: "country"
        }
      ] 
 
 },
  methods: {
    //  暴露事件方法
    selectNode(country, province, city) {
      console.log(country, province, city);
    },
    getResult() {
      // 返回的国省市
    },
    init () {
      this.$refs.area.init()
    }
  }
};
</script>
