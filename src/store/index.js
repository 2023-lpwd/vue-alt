import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: []
  },
  mutations: {
    set (state, products) {
      state.cart = products
    },
    add (state, product) {
      const productInState = state.cart.find(stateProduct => stateProduct.id === product.id)
      if (!productInState) {
        // If product not in cart -> add product to cart
        state.cart.push({ ...product, quantity: 1 })
      } else {
        // If product is already in cart -> increase quantity
        productInState.quantity++
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    remove (state, id) {
      const index = state.cart.findIndex(stateProduct => stateProduct.id === id)
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateQuantity (state, { id, action }) {
      const productInState = state.cart.find(stateProduct => stateProduct.id === id)
      if (action === 'increase') {
        productInState.quantity++
      } else if (action === 'decrease') {
        if (productInState.quantity > 1) {
          productInState.quantity--
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
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
