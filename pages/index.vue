<template>
  <div class="container">
    <!-- <List /> -->
    <button @click="$router.push({ path: '/post/view' })">跳转</button>
    <button @click="loading">loading</button>
    <button @click="add">add</button>
    <button @click="rerset">rerset</button>
    <a class="icon-link" href="https://twitter.com/wangqifree" target="_blank">
      <span class="iconfont icon-twitter"></span>
    </a>
    <Person />
  </div>
</template>

<script>
// import List from '@/components/List.vue'
import { mapState, mapMutations } from 'vuex'
import { Person } from '@/components'
export default {
  components: {
    Person
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
}
</style>
