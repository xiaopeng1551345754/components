<template>
  <div>
    <button @click="show=!show">{{show?'关闭':'打开'}}</button>
    <!-- area内部方法：setContries(list)，setProvinces(id,list)，setCities(id,list) -->
    <area v-ref:area :show="show" :input-width="inputWidth" @select-node="selectNode" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      areaComponent: null,
      show: true,
      inputWidth: "468px",
      list: [
        {
          name: "中国",
          id: "china",
          type: "country",
          children: [
            {
              name: "北京",
              id: "BeiJing",
              type: "province",
              children: [
                {
                  name: "朝阳区",
                  id: "district",
                  type: "district"
                },
                {
                  name: "昌平区",
                  id: "district",
                  type: "district"
                },
                {
                  name: "东城区",
                  id: "district",
                  type: "district"
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
        },
        {
          name: "中国",
          id: "china",
          type: "country"
        }
      ]
    };
  },
  ready() {
    this.areaComponent = this.$children[0];
    this.areaComponent.setContries(this.list);
  },
  methods: {
    //  暴露事件方法
    selectNode(from, data, index) {
      console.log(from, data);
      if (from === "country") {
        this.areaComponent.setProvinces(data.id, data.children);
      } else if (from === "provice") {
        this.areaComponent.setCities(data.id, data.children);
      } else if (from === "city") {
        this.show = false
      }
    },
    getResult() {
      // 返回的国省市
    }
  }
};
</script>
