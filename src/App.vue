<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from '@/components/Aside/Aside.vue'
import { onBeforeMount, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
// const goodList = ref([])
// const getGoods = async () => {
//   const { data: res } = await proxy.$http.get()
//   return res.list
// }
// getGoods().then((reason) => {
//   console.log(reason)
//   goodList.value = reason
// })
onBeforeMount(() => {
  console.log('1-创建---goods:', proxy)
})
</script>

<style lang="less" >
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   .goods-container {
//     padding: 46px 0 50px 0;
//   }
// }
</style>
