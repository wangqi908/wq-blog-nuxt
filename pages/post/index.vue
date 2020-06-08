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
  asyncData() {
    return postViewReq({
      _id: '5ed5ddc30fbb844b24b4bcdb'
    }).then(res => {
      // this.content = res.data.data.content

      return { content: res.data.data }
    })
  }
}
</script>

<style>
</style>