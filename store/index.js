export const state = () => ({
  counter: 0,
  isShowRightDom: false,
  propList: []
})

export const mutations = {
  increment(state, payload = 1) {
    state.counter += payload
  },
  reset(state) {
    state.counter = 0
  },
  // 设置token
  setToken(state, payload = '') {
    state.token = payload
  },
  setShowRightDom(state, payload) {
    state.isShowRightDom = payload
  },
  setPropList(state, payload) {
    state.propList = payload
  }
}
