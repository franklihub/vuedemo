<template>
  <Header></Header>
  <keep-alive>
    <div class="goods-container">
      <Goods
        class="goods"
        v-for="item in goodList"
        :key="item.id"
        :num="item.goods_count"
        :title="item.goods_name"
        :price="item.goods_price"
        :thumb="item.goods_img"
        @upnum="(val) =>item.goods_count = val"
      ></Goods>
    </div>
  </keep-alive>
  <Footer class="footer"></Footer>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'

import { onBeforeMount, ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const goodList = ref([])
const getGoods = async () => {
  const { data: res } = await proxy.$http.get()
  return res.list
}
getGoods().then((reason) => {
  console.log(reason)
  goodList.value = reason
})
onBeforeMount(() => {
  console.log('1-创建---goods')
})
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .goods-container {
    padding: 46px 0 50px 0;
  }
}
</style>
