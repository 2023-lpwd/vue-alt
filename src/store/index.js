import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: []
  },
  mutations: {
    add (state, product) {
      const productInState = state.cart.find(stateProduct => stateProduct.id === product.id)
      if (!productInState) {
        // If product not in cart -> add product to cart
        state.cart.push({ ...product, quantity: 1 })
      } else {
        // If product is already in cart -> increase quantity
        productInState.quantity++
      }
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
