<template>
  <div class="date_wrap">
    <div class="wrap">
      <datepicker
        @sure='sure'
      >
        
      </datepicker>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sure (str,end) {
      console.log(JSON.stringify(str),JSON.stringify(end))
    }
  }
}
</script>

<style lang="less" scoped>
.date_wrap {
  background: green;
  width: 100vw;
  height: 100vh;
  .wrap {
    width: 470px;
    position: fixed;
    left: 40%;
    top: 30%;
  }
  .pi {
    margin: auto;
  }
}
</style>
