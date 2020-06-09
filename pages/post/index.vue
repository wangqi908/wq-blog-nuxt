<template>
  <div>
    <div>post</div>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { postViewReq } from '@/api'
export default {
  data() {
    return {
      content: 'aaaa'
    }
  },
  // async asyncData({ $axios }) {
  //   let res = await $axios.post(`/post/view`, {
  //     _id: '5ed5c9324e54464a9cea2e63'
  //   })
  //   return { content: res.data.data.content }
  // }
  asyncData() {
    return postViewReq({
      _id: '5ed5c9324e54464a9cea2e63'
    }).then(res => {
      // this.content = res.data.data.content

      return { content: res.data.data.content }
    })
  }
}
</script>

<style>
</style>