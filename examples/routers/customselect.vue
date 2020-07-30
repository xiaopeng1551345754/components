<template>
  <div class="screen">
    {{ selected.value }} {{ search }}
    <div class="control">
      <customselect
        :list="list"
        :search.sync="search"
        :placeholder="placeholder"
        :key="key"
        :value="value"
        :disabled="disabled"
        :selected.sync="selected"
        :show-del="showDel"
        :filter="filter"
        @search="searchT"
        @select="select"
      ></customselect>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      search: "",
      placeholder: "请输入关键词",
      key: "text",
      value: "value",
      disabled: false,
      selected: {
        text: 7,
        value: 7,
      },
      showDel: true,
      filter: false,
    };
  },
  methods: {
    select() {
      // console.log(this.selected);
    },
    searchT() {
      console.log(this.search);
    },
  },
  ready() {
    setTimeout(() => {
      for (let i = 1; i <= 10; i++) {
        this.list.push({
          text: i,
          value: i,
        });
      }
    });
  },
};
</script>

<style lang="less" scoped>
.screen {
  width: 200px;
  margin-left: 45vw;
  .control {
    width: 100%;
    height: 60px;
  }
}
</style>
