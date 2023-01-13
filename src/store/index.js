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
    remove (state, id) {
      const index = state.cart.findIndex(stateProduct => stateProduct.id === id)
      state.cart.splice(index, 1)
    },
    increaseQuantity (state, id) {
      const productInState = state.cart.find(stateProduct => stateProduct.id === id)
      productInState.quantity++
    },
    decreaseQuantity (state, id) {
      const productInState = state.cart.find(stateProduct => stateProduct.id === id)
      if (productInState.quantity > 1) {
        productInState.quantity--
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
