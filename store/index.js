export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state, payload = 1) {
    state.counter += payload
  },
  reset(state) {
    state.counter = 0
  }
}
