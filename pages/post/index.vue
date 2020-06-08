<template>
  <div>
    <div>post</div>
    <div v-html="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      content: 'aaaa'
    }
  },
  asyncData() {
    return axios
      .post(`/blog/post/view`, {
        _id: '5ed5ddc30fbb844b24b4bcdb'
      })
      .then(res => {
        // this.content = res.data.data.content

        return { content: res.data.data.content }
      })
  }
}
</script>

<style>
</style>