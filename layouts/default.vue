<template>
  <div class="layout">
    <Head class="header" />
    <div class="main-content">
      <nuxt />
    </div>
    <Foot class="footer" />
  </div>
</template>


<script>
import { Head, Foot } from '@/components'

export default {
  name: 'layout',
  components: { Head, Foot }
}
</script>

<style scoped lang='scss'>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  flex: 0 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
}

.main-content {
  @extend %page-common;
  flex: 1 0 auto;
  background-color: $bgc;
}

.footer {
  flex: 0 0 auto;
}
</style>