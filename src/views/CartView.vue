<template>
  <div class="cart-view">
    <ul class="cart-view__list">
      <li class="cart-view__item" v-for="(product, index) in $store.state.cart" :key="index">
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

</style>
