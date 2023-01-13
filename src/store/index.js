import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: []
  },
  mutations: {
    add (state, product) {
      state.cart.push(product)
    },
    increment (state, payload = 1) {
      state.count+=payload
    },
    multiply (state, payload = 2) {
      state.count*=payload
      // state.count = state.count * 2
    }
  }
})
