<template>
    <div class="search-page">
        <div class="search-content">
            <input class="search-input" placeholder="请输入搜索关键词" @keyup.enter="searchInfo" v-model="searchValue"/>
            <span class="goBack" @click="goBack"></span>
        </div>
        <ul id="search-tip" v-if="this.tag == false">
            <li v-for="(item, index) in searchRecommend" :key="index" @click="showNewsDetail(index)">{{item.keyword}}</li>
        </ul>
        <div class="search-list" v-if="this.tag != false">
            <news-list :newslist="searchResult" :searchKey="searchValue"></news-list>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import newsList from '../components/news_list'
export default {
  data () {
    return {
      searchValue: '',
      searchTmp: '',
      searchResult: [],
      searchRecommend: [],
      // 是否展示新闻详细内容
      tag: false
      // 是否出现搜索框 出现
      // tagK: true
    }
  },
  components: {
    newsList
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    searchInfo () {
      if (this.searchValue !== '') {
        // 获取搜索推荐词
        axios.get('https://i.snssdk.com/search/api/sug/', {
          params: {
            keyword: this.searchValue
          }
        }).then(res => {
          // console.log(res)
          if (res.data.code === 0) {
            this.searchRecommend = res.data.data
          }
          // console.log(this.searchRecommend)
          // this.tagK = false
        })
      }
    },
    showNewsDetail (key) {
      // console.log(key)
      this.searchTmp = this.searchRecommend[key]
      console.log(this.searchTmp.keyword)
      // 获取搜索结果
      axios.get('https://i.snssdk.com/search/api/study/', {
        params: {
          keyword: this.searchTmp.keyword
        }
      }).then(res => {
        // console.log(res)
        if (res.data.code === 0) {
          this.searchResult = res.data.data
        }
        // console.log(this.searchResult)
      })
      this.tag = true
      // this.tagK = false
    }
  }
}
</script>

<style>
.search-page {
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: -60px;
}
.goBack {
  float: right;
  background: url("../assets/back.png") no-repeat;
  background-size: 100%;
  height: 70px;
  width: 50px;
  margin-top: 10px;
}
.search-content {
  background: #d43d3d;
  padding: 6px;
}
.search-input {
  height: 60px;
  width: 80%;
  color: #ffffff;
  font-size: 29px;
  margin-top: 2px;
  border-radius: 30px;
  border-color: #ffffff;
  padding-left: 90px;
  background: url("../assets/net.png") no-repeat;
  background-color: rgba(255,110,112,0.2);
  background-position: 10px 5px;
}
::-webkit-input-placeholder { /* WebKit browsers */
  color: #999999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #999999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #999999;
}
#search-tip {
  text-align: center;
  font-size: 23px;
}
#search-tip li {
  display: inline-block;
  background: #f5f5f5;
  color: #363636;
  margin: 8px 10px;
}
</style>
