import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload = 1) {
      state.count+=payload
    },
    multiply (state, payload = 2) {
      state.count*=payload
      // state.count = state.count * 2
    }
  }
})
