<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="cart-view__title">Mon panier</h1>
      <div v-if="$store.state.cart.length" class="cart-view__list">
        <div class="cart-view__item" v-for="(product, index) in $store.state.cart" :key="index">
          <CartProduct :name="product.name" :price="product.price" :images="product.images" :quantity="product.quantity"  />
        </div>
        <div class="cart-view__total">Total du panier : {{ cartTotal }}€</div>
      </div>
      <div v-else>
        Le panier est vide
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";

export default {
  components: { CartProduct },

  computed: {
    cartTotal () {
      // Old method to accumulate values
      // let total = 0
      // this.$store.state.cart.forEach((product) => {
      //   total += product.price * product.quantity
      // })
      // return total

      // New method to accumulate values
      return this.$store.state.cart.reduce((total, product) => {
        total += product.price * product.quantity
        return total
      }, 0)
    }
  }
};
</script>

<style lang="scss">
.cart-view {
  &__list {

  }

  &__item {
    &:not(:first-of-type) {
      border-top: 1px solid black;
    }
  }

  &__total {
    font-size: 22px;
    font-weight: 700;
    margin: 30px 0 0 auto;
    text-align: right;
  }
}
</style>
