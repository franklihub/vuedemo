<template>
  <van-cell-group inset>
    <van-field v-model="val" center clearable label="任务" placeholder="请输入" @keyup.esc="onEsc">
      <template #button>
        <van-button size="small" type="primary" @click="onAddTask">添加</van-button>
      </template>
    </van-field>
    <hr />
    <TodoList v-model:todoList="valList"></TodoList>
  </van-cell-group>
</template>

<script setup>
import TodoList from '@/components/TodoList/TodoList.vue'

import { ref, onBeforeMount, provide } from 'vue'

// export default {
//   name: 'App',
// setup (props, ctx) {
// const ctx = useContext()
// ctx.name = 'App'
const val = ref('testval')
const valList = ref(['testvalList'])
// return {
//   val,
//   valList,
const onEsc = () => {
  val.value = ''
  console.log(valList)
}
const onAddTask = () => {
  if (val.value !== '') {
    const onetask = {
      id: '' + valList.value.length,
      name: val.value,
      checked: false
    }
    valList.value.push(onetask)
    val.value = ''
  }
}

provide('valList', valList)
provide('val', val)
onBeforeMount(() => {
  console.log('1-组件创建之前-----beforeCreate()')
})
//   }
// },
// components: { TodoList }
// }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
