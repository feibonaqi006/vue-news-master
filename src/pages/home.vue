<template>
    <div id="home">
        <myHeader></myHeader>
        <my-swiper></my-swiper>
        <router-view></router-view>
    </div>
</template>

<script>
import myHeader from '../components/header'
import mySwiper from '../components/swiper'
export default {
  data () {
    return {}
  },
  components: {
    myHeader, mySwiper
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
}
</style>
