<template>
  <div class="category-view">
    <div class="container">
      <div v-if="products.length" class="category-view__products">
        <p>Mes produits</p>
        <div class="row">
          <div class="column -size-3" v-for="(product, index) in products" :key="index">
            <Product :name="product.name" :price="product.price" :images="product.images" />
          </div>
        </div>
      </div>
      <div v-else class="category-view__no-products">
        Aucun produit n'a été trouvé
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
      category: {},
      products: []
    }
  },

  async mounted () {
    await this.getCategoryData(this.$route.params.category)
  },

  async beforeRouteUpdate (to, from) {
    await this.getCategoryData(to.params.category)
  },

  methods: {
    async getCategoryData (categorySlug) {
      // Get category by slug
      const categoryResponse = await client.get('/wc/v3/products/categories?slug=' + categorySlug)
      this.category = categoryResponse.data

      // Get products by category
      const response = await client.get('/wc/v3/products?category=' + this.category[0].id)
      this.products = response.data
    }
  }
}
</script>

<style lang="scss">

</style>
