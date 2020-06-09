<template>
  <div>
    <PostItem v-for="item in list" :key="item._id" :info="item" />

    <Pagination
      :total="count"
      :pageSize="pageSize"
      :currentPage.sync="currentPage"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import { postPageReq } from '@/api'
import { Pagination, PostItem } from '@/components'
export default {
  name: 'postList',
  components: { Pagination, PostItem },
  data() {
    return {
      list: [],
      count: '',
      currentPage: 1,
      pageSize: 3
    }
  },
  async asyncData() {
    let data = {
      pageSize: 3,
      pageNum: 0
    }
    const res = await postPageReq(data)
    if (res.data.code !== 200) return
    let { list, count } = res.data.data
    return {
      list,
      count
    }
  },
  methods: {
    async getPageInfo() {
      let { currentPage, pageSize } = this
      let data = {
        pageSize,
        pageNum: currentPage - 1,
        data: {}
      }
      const res = await postPageReq(data)
      if (res.data.code !== 200) return
      let { list, count } = res.data.data
      this.list = list
      this.count = count
    },
    currentChange() {
      this.getPageInfo()
    }
  }
}
</script>

<style>
</style>