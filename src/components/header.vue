<template>
  <div class="stage-header">
    <div class="header-left">
      <img src="../assets/message.png" class="header-message">
    </div>
    <div class="header-center" @click="freshPage" >
      <img src="../assets/logo.png" class="header-logo">
      <img src="../assets/refresh.png" class="header-refresh" :class="{'rotate': refresh == true}">
    </div>
    <div class="header-right">
      <img src="../assets/search.png" class="header-search" @click="search">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      refresh: false
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    freshPage () {
      this.refresh = true
      setTimeout(() => {
        this.refresh = false
      }, 200)
    }
  }
}
</script>

<style scoped>
  .stage-header{
    position: fixed;
    height: 90px;
    width: 100%;
    background: #d43d3d;
    z-index: 1;
  }
  .header-left{
    position: relative;
    height: 60px;
    width: 60px;
    margin-left: 15px;
    display: inline-block;
  }
  .header-message{
    position: relative;
    left: 20px;
    width: 50px;
    height: 50px;
  }
  .header-center{
    display: inline-block;
    width: 600px;
    height: 88px;
    text-align: center;
  }
  .header-logo{
    position: relative;
    width: 170px;
    height: 40px;
    top: -7px;
    display: inline-block;
  }
  .header-refresh{
    position: relative;
    width: 30px;
    height: 30px;
    top: -10px;
    display: inline-block;
    margin-left: 18px;
  }
  .header-right {
    width: 80px;
    height: 80px;
    display: inline-block;
  }
  .header-search {
    width: 50px;
    height: 50px;
    margin-top: 20px;
  }
  .rotate {
    -webkit-transform-style: preserve-3d;
    -webkit-animation: x-spin 0.7s linear;
  }
  @-webkit-keyframes x-spin {
    0% {
      -webkit-transform: rotateZ(0deg);
    }
    50% {
      -webkit-transform: rotateZ(180deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
    }
  }
</style>
