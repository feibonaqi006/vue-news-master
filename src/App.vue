<template>
 <div id="app">
   <myHeader @getVal="getVal"></myHeader>
   <tabs :tab-list='tabList' v-if="this.flagTab == false">
     <router-view></router-view>
   </tabs>
 </div>
</template>

<script>
import myHeader from '../src/components/header'
import tabs from '../src/components/tabs'
export default {
  data () {
    return {
      tabList: [{
        name: 'tech',
        path: '/news_tech'
      }, {
        name: 'sports',
        path: '/news_sports'
      }, {
        name: 'game',
        path: '/news_game'
      }],
      // tab是否隐藏  不隐藏
      flagTab: false
    }
  },
  components: {
    tabs, myHeader
  },
  methods: {
    getVal (val) {
      console.log(val)
      this.flagTab = val
    }
  }
}
</script>
