<template>
  <div class="menu">
    <nuxt-link
      :to="item.path"
      v-for="item in menuList"
      :key="item.id"
      class="item add-transition"
    >{{item.title}}</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('menu', ['menuList'])
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
.nuxt-link-exact-active {
  background-color: $bgc;
  color: $active;
}
</style>