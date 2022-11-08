<template>
  <div class="home-container">
    <van-nav-bar title="Home" fixed />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onload">
        <ArticalItem v-for="item in artList" :key="item.art_id" :article="item"></ArticalItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import ArticalItem from '@/components/Artical/ArticalItem.vue'
import request from '@/util/request'
export default {
  components: { ArticalItem },
  // props: {
  //   page: {
  //     type: Number,
  //     default: 1
  //   },
  //   limit: {
  //     type: Number,
  //     default: 10
  //   }
  // },
  data () {
    return {
      artList: [],
      page: 1,
      limit: 10,
      loading: true,
      refreshing: false,
      finished: false
    }
  },
  methods: {
    async initArtical () {
      const { data: res } = await request.get(
        'https://www.escook.cn/articles',
        {
          params: {
            _page: 1,
            _limit: 10
          }
        }
      )

      this.artList = res
      this.loading = false
      this.refreshing = false
    },
    async onload () {
      this.loading = true
      this.page++
      const { data: res } = await request.get(
        'https://www.escook.cn/articles',
        {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        }
      )

      console.log('newdata:', res)
      this.artList = [...this.artList, ...res]
      this.loading = false
      if (res.length === 0) {
        this.finished = true
      }
    },
    onRefresh () {
      this.refreshing = true
      this.initArtical()
      this.refreshing = false
      this.finished = false
      this.page = 1
    }
  },
  created () {
    this.initArtical()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
