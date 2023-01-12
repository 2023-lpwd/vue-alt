<template>
  <div class="category-view">
    {{ $route.params }}

    <p style="margin-top: 100px;">Mes produits</p>
    <div class="row">
      <div class="column -size-3" v-for="(product, index) in products" :key="index">
        <Product :name="product.name" :price="product.price" :images="product.images" />
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import Product from "@/components/Product.vue";

export default {
  components: { Product },
  data () {
    return {
      products: []
    }
  },

  async mounted () {
    // Get products by category
    const response = await client.get('/wc/v3/products?category=' + this.$route.params.category)
    this.products = response.data
  }
}
</script>

<style lang="scss">

</style>
