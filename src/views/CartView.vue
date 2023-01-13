<template>
  <div class="cart-view">
    <div class="container">
      <div class="cart-view__list">
        <div class="cart-view__item" v-for="(product, index) in $store.state.cart" :key="index">
          <CartProduct :name="product.name" :price="product.price" :images="product.images" :quantity="product.quantity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";

export default {
  components: { CartProduct }
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
}
</style>
