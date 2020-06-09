<template>
  <Card class="recent">
    <div class="title">最近更新</div>
    <div class="list-box">
      <div class="item" v-for="item in list" :key="item.id">
        <nuxt-link :to="{ name:'post-view-id', params:{id:item._id}}" v-if="item.banner">
          <img class="post-pic" :src="item.http+item.banner" alt="博客" />
        </nuxt-link>

        <div class="content">
          <div class="time">{{item.createTime|allTimeFilter}}</div>

          <nuxt-link :to="{ name:'post-view-id', params:{id:item._id}}">
            <div class="post-title">{{item.title}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import { postPageReq } from '@/api'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getPageInfo() {
      let data = {
        pageSize: 3,
        pageNum: 0
      }
      const res = await postPageReq(data)
      if (res.data.code !== 200) return
      let { list } = res.data.data
      this.list = list
    }
  },
  created() {
    this.getPageInfo()
  }
}
</script>

<style lang='scss' scoped>
.recent {
  border-radius: 4px;
  width: 220px;
  margin-bottom: 10px;

  .title {
    font-size: 14px;
    color: $titleText;
    margin-bottom: 10px;
  }

  .item {
    display: flex;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border: 0;
    }
  }
  .post-pic {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    padding: 10px 0;
  }
  .content {
    padding: 10px 0;
  }
  .time {
    font-size: 12px;
    color: $mainText;
    margin-bottom: 6px;
  }
  .post-title {
    color: $titleText;
    font-size: 14px;
  }
}
@media (max-width: $small-width) {
  .recent {
    width: 100%;
    margin-right: 0;
  }
}
</style>