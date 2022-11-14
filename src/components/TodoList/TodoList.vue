<template>
  <van-checkbox-group v-model="checkedList" @change="onChange">
    <van-checkbox v-for="item in todoList" :key="item.id" :name="item.id">{{ item.name }}</van-checkbox>
  </van-checkbox-group>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  name: 'TodoList',
  props: {
    todoList: ref([])
  },
  setup (props, ctx) {
    const checkedList = inject('valList')
    console.log('inject:', checkedList)
    const checkedVal = inject('val')
    console.log('inject:', checkedVal)
    /// /
    checkedList.value = ['subcheckedlist']
    checkedVal.value = 'subcheckedval'
    // ctx.emit('update:todoList', ['subtodolist'])
    return {
      checkedList,
      onChange () {
        props.todoList.forEach((item) => {
          if (checkedList.value.indexOf(item.id)) {
            item.checked = false
          } else {
            item.checked = true
          }
        })
        console.log('change:', props)
        console.log('change:', props.todoList)
        // ctx.emit('update:todoList', props.todoList)
      }
    }
  }
}
</script>

<style>
</style>
