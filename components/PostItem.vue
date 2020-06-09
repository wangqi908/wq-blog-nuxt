<template>
  <Card class="item">
    <nuxt-link class="pic" :to="{ name:'post-view-id', params:{id:info._id}}" v-if="info.banner">
      <img class="post-pic" :src="info.http+info.banner" alt="博客" />
    </nuxt-link>
    <div class="content">
      <div class="time">
        <span>{{info.createTime|allTimeFilter}}</span>
        <span>{{info.type|postTypeFilter}}</span>
      </div>
      <div class="title">
        <nuxt-link :to="{ name:'post-view-id', params:{id:info._id}}">{{info.title}}</nuxt-link>
      </div>

      <div class="intro" v-if="info.intro">{{info.intro}}</div>

      <nuxt-link class="btn" :to="{ name:'post-view-id', params:{id:info._id}}">阅读全文</nuxt-link>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'postItem',
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style lang='scss' scoped>
.item {
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: $shadow;
  .pic {
    width: 100%;
    img {
      width: 100%;
      max-height: 200px;
    }
  }
  .content {
    padding: 20px 10px;
  }
  .time {
    margin: 10px 0;
    font-size: 12px;
    span {
      margin-right: 10px;
    }
  }
  .title {
    font-size: 16px;
    color: $titleText;
    margin-bottom: 20px;
  }
  .intro {
    font-size: 14px;
    margin: 10px 0;
  }
  .btn {
    @extend %btn-common;
  }
}
</style>
