<template>
  <div class="left-box">
    <Person />

    <Recent v-if="$store.state.isShowRightDom" />
  </div>
</template>

<script>
import { Person, Recent } from '@/components'
export default {
  components: { Person, Recent }
}
</script>

<style scoped lang='scss'>
.left-box {
  margin-right: 10px;
}
@media (max-width: $small-width) {
  .left-box {
    margin-right: 0;
  }
}
</style>