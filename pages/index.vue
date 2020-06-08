<template>
  <div class="container">
    <!-- <List /> -->
    <button @click="$router.push({ path: '/post/view' })">跳转</button>
    <button @click="loading">loading</button>
    <button @click="add">add</button>
    <button @click="rerset">rerset</button>
    {{counter}}
  </div>
</template>

<script>
// import List from '@/components/List.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    // List
  },
  methods: {
    ...mapMutations(['increment', 'reset']),
    loading() {
      this.$loading.show()
    },
    add() {
      this.increment()
    },
    rerset() {
      this.reset(0)
    }
  },
  computed: {
    ...mapState(['counter'])
  }
}
</script>

<style lang='scss'>
.test {
  background-color: $headBgc;
}
</style>
