import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      reducer(val) {
        console.log(val)
        return {
          counter: val.counter
        }
      }
    })(store)
  })
}
