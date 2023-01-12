<template>
  <div class="product-view">
    <div class="container">
      <h1 class="product-view__name">{{ product.name }}</h1>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";

export default {
  data () {
    return {
      product: {}
    }
  },

  async mounted () {
    await this.getProductData(this.$route.params.product)
  },

  async beforeRouteUpdate (to, from) {
    await this.getProductData(to.params.product)
  },

  methods: {
    // Get WooCommerce product data by slug
    async getProductData (slug) {
      const response = await client.get('/wc/v3/products?slug=' + slug)
      this.product = response.data[0]
    }
  }
};
</script>

<style lang="scss">

</style>
