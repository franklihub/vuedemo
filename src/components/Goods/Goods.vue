<template>
  <van-card :num="num" :price="price" :desc="desc" :title="title" :thumb="thumb">
    <!-- <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>-->
    <template #footer>
      <van-stepper v-model="num" integer />
    </template>
  </van-card>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, ref, watch, toRef } from 'vue'
const props = defineProps({
  num: ref(0),
  price: ref(0),
  desc: ref(''),
  title: ref(''),
  thumb: ref('')
})
const emit = defineEmits(['upnum'])
const { price, desc, title, thumb } = toRefs(props)
const num = ref(toRef(props, 'num').value)
watch(num, (val, perval) => {
  console.log('watchnum:', num)
  emit('upnum', val)
})
</script>

<style lang="less" scoped>
</style>
