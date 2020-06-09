<template>
  <div class="menu">
    <nuxt-link
      :to="item.path"
      v-for="item in menuList"
      :key="item.id"
      :class="['item add-transition',parentName===item.path?'nuxt-link-active':'']"
      exact
    >{{item.title}}</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      parentName: ''
    }
  },
  computed: {
    ...mapState('menu', ['menuList'])
  },
  created() {
    this.parentName = '/' + this.$route.fullPath.split('/')[1]
  },
  watch: {
    $route(to) {
      this.parentName = '/' + to.fullPath.split('/')[1]
    }
  }
}
</script>

<style lang='scss' scoped>
.menu {
  display: flex;
  height: 100%;
}
.item {
  line-height: 50px;
  padding: 0 16px;
  color: $mainText;
  font-size: 14px;
  flex-shrink: 0;
  transition: all 0.4s;
  &:hover {
    background-color: $bgc;
    color: $active;
  }
  &:active {
    background-color: #ebebeb;
  }
}
.nuxt-link-active {
  background-color: $bgc;
  color: $active;
}
</style>