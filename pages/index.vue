<template>
  <div class="home">
    <LeftSide />
    <div class="list">
      <PostItem v-for="item in list" :key="item._id" :info="item" />

      <Pagination
        :total="count"
        :pageSize="pageSize"
        :currentPage.sync="currentPage"
        @current-change="currentChange"
      />
    </div>
    <RightSide />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { postPageReq } from '@/api'
import { mapMutations } from 'vuex'
import { LeftSide, RightSide, PostItem, Pagination } from '@/components'
import { throttle } from '@/utils'
export default {
  name: 'home',
  components: { LeftSide, RightSide, PostItem, Pagination },
  data() {
    return {
      smallWidth: 950,
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
    ...mapMutations(['setShowRightDom']),
    watchClientWidth() {
      let clientWidth = document.body.clientWidth
      this.setShowRightDom(clientWidth < this.smallWidth)
    },
    handleClientWidth() {
      this.watchClientWidth()
      window.addEventListener(
        'resize',
        throttle(() => {
          this.watchClientWidth()
        }, 100)
      )
    },
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
  mounted() {
    this.handleClientWidth()
  },
  computed: {
    ...mapState(['pageSize'])
  }
}
</script>

<style scoped lang='scss'>
.home {
  display: flex;
  .list {
    flex: 1;
  }
}
@media (max-width: $small-width) {
  .home {
    display: block;
  }
}
</style>