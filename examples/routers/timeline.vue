<template>
  <div class="wrap">
    <timeline 
    :data="data" 
    @select="select"
    :lang='"en"'
    > </timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    select(item) {
      console.log("select", item);
    },
  },
  ready() {
    for (let i = 11; i--; ) {
      this.data.push({
        time: `${i}:${i}-${i}:${i}`,
        theme: '金夫人直播金夫人直播',
        type: '直播',
        people: '金夫人、小B、大明',
        id: `${i}`
      })
    }
  },
};
</script>
