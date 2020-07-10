<template>
  <div class="home">
    <my-header></my-header>
    <tabs :tab-list='tabList'>
      <router-view></router-view>
    </tabs>
    <search v-if="flagSearch == true"></search>
  </div>
</template>

<script>
import myHeader from '../components/header'
import tabs from '../components/tabs'
import search from '../pages/search'
export default {
  components: {
    tabs, myHeader, search
  },
  data () {
    return {
      // tab是否隐藏  不隐藏
      flagTab: false,
      // search是否显示  不显示
      flagSearch: false,
      tabList: [{
        name: 'hot',
        path: '/home/news_hot'
      }, {
        name: 'sports',
        path: '/home/news_sports'
      }, {
        name: 'game',
        path: '/home/news_game'
      }, {
        name: 'tech',
        path: '/home/news_tech'
      }]
    }
  },
  methods: {
    // getVal (val) {
    //   console.log(val)
    //   this.flagTab = val
    //   this.flagSearch = val
    // }
  }
}
</script>
<style></style>
