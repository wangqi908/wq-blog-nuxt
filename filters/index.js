import Vue from 'vue'
import { formatTime } from '@/utils'

export default ({ store }) => {
  const filters = {
    HMSTimeFilter(val) {
      return formatTime(val, 'HMS')
    },
    YMDTimeFilter(val) {
      return formatTime(val, 'YMD')
    },
    allTimeFilter(val) {
      return formatTime(val, 'all')
    },
    postTypeFilter(val) {
      if (!val) return

      let postTypes = store.state.propList.filter(ele => ele.type === 'post')

      let active = postTypes.find(ele => ele.value === val)
      return active ? active.title : ''
    }
  }

  const fn = Vue => {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }

  Vue.use(fn)
}
