<template>
  <div class="container">
    <List />
    <button @click="$router.push({ path: '/post/view' })">跳转</button>
    <div class="test">aaa</div>
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  components: {
    List
  }
}
</script>

<style lang='scss'>
.test {
  background-color: $headBgc;
}
</style>
