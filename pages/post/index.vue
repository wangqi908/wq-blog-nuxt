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
import { mapState } from 'vuex'
import { postPageReq } from '@/api'
import { Pagination, PostItem } from '@/components'
export default {
  name: 'postList',
  components: { Pagination, PostItem },
  head() {
    return {
      title: '文章列表'
    }
  },
  data() {
    return {
      list: [],
      count: '',
      currentPage: 1
    }
  },
  async asyncData({ store }) {
    let data = {
      pageSize: store.state.pageSize,
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
  },
  computed: {
    ...mapState(['pageSize'])
  }
}
</script>

<style>
</style>