import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      reducer(val) {
        return {
          counter: val.counter
        }
      }
    })(store)
  })
}
