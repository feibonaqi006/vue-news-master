<template>
    <div class="list-components">
        <div v-for="(item, index) in newslist" :key="index">
            <div class="news-show" @click="showNewsDetail(item.link_url)">
                <h3 class="news-title" v-html="item.title"></h3>
                <p class="news-description">{{item.description}}</p>
                <div class="news-info">
                    <span class="news-username">{{item.user_name}}</span>
                    <span class="news-common">评论 {{item.comments_count}}</span>
                    <span class="news-common" v-if="item.create_time !== 0">{{item.create_time}} 分钟前</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    newslist: Array,
    searchKey: String
  },
  methods: {
    showNewsDetail (url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.news-show {
  margin: 20px 25px;
}
.news-title {
  font-size: 30px;
  font-weight: normal;
  color: #333;
  margin: 10px 10px;
}
.news-info {
  color: #999;
  margin-top: 10px;
  font-size: 20px;
}
.news-description {
  font-size: 22px;
  margin-top: 13px;
  font-weight: lighter;
}
.news-common {
  margin-left: 15px;
}
</style>
