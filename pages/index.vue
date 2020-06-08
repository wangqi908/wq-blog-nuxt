<template>
  <div class="home">
    <LeftSide />
    <div class="list">
      <PostList />
    </div>
    <RightSide />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { PostList } from '@/components'
import { LeftSide, RightSide } from './components'
import { throttle } from '@/utils'
// import { propListReq } from '@/api'
export default {
  name: 'home',
  components: { LeftSide, RightSide, PostList },
  data() {
    return {
      smallWidth: 950
    }
  },
  // asyncData() {
  //   return propListReq({}).then(res => {
  //     console.log(res)
  //     // return { title: res }
  //   })
  // },
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
    }
  },
  mounted() {
    this.handleClientWidth()

    // propListReq({}).then(res => {
    //   console.log(res)
    //   // return { title: res }
    // })
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