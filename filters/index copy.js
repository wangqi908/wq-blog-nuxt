import Vue from 'vue'
import { formatTime } from '@/utils'
import { state } from '@/store'

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

    console.log(val)
    console.log(state)

    // let postTypes = state.propList.filter(ele => ele.type === 'post')

    // let active = postTypes.find(ele => ele.value === val)
    // return active ? active.title : ''
    return 'aaa'
  }
}

const fn = Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

Vue.use(fn)
