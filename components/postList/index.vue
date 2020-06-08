<template>
  <div>
    list
    <button @click="test">test</button>
    {{this.$store.state.counter}}
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['increment']),
    test() {
      this.increment()
    }
  }
}
</script>

<style>
</style>