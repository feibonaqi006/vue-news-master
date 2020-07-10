<template>
 <div id="app">
<!--   <myHeader @getVal="getVal"></myHeader>-->
<!--   <tabs :tab-list='tabList' v-if="this.flagTab == false">-->
<!--     <router-view></router-view>-->
<!--   </tabs>-->
<!--   <search v-if="this.flagSearch == true" @getVal="getVal"></search>-->
   <router-view></router-view>
 </div>
</template>

<script>
// import myHeader from '../src/components/header'
// import tabs from '../src/components/tabs'
// import search from '../src/pages/search'
export default {
//   data () {
//     return {
//       tabList: [{
//         name: 'hot',
//         path: '/news_hot'
//       }, {
//         name: 'sports',
//         path: '/news_sports'
//       }, {
//         name: 'game',
//         path: '/news_game'
//       }, {
//         name: 'tech',
//         path: '/news_tech'
//       }],
//       // tab是否隐藏  不隐藏
//       flagTab: false,
//       // search是否显示  不显示
//       flagSearch: false
//     }
//   },
//   components: {
//     tabs, myHeader, search
//   },
//   methods: {
//     getVal (val) {
//       console.log(val)
//       this.flagTab = val
//       this.flagSearch = val
//     }
//   }
}
</script>
