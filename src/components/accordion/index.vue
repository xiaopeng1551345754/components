<template>
  <div class="accordion">
    <div
      class="item"
      v-for="(idx, item) in data"
      :key="idx"
      :style="{
        height: item.id === active ? maxHeight + 'px' : minHeight + 'px',
      }"
      :class="{ active: item.id == active }"
      @click="select(item)"
    >
      <img
        :src="item.src"
        :style="{ height: maxHeight + 'px' }"
        draggable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "accordion",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultActive: {
      type: String,
      default: "",
    },
    minHeight: {
      type: Number,
      default: 240,
    },
    maxHeight: {
      type: Number,
      default: 375,
    },
  },
  data() {
    return {
      active: "",
    };
  },
  methods: {
    select(item) {
      this.active = item.id;
      this.$emit("select", item);
    },
  },
  watch: {
    defaultActive: {
      immediate: true,
      handler(n) {
        if (n) {
          this.active = this.defaultActive;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.accordion {
  width: 100%;
  height: 100%;
  overflow: auto;
  user-select: none;
  .item {
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    img {
      width: 100%;
      display: block;
    }
  }
}
.accordion::-webkit-scrollbar {
  display: none;
}
</style>
