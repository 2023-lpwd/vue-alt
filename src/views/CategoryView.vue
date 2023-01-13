<template>
  <div class="category-view">
    <div class="container">
      <div v-if="products.length" class="category-view__products">
        <p>Mes produits</p>
        <div class="row">
          <div class="column -size-3" v-for="(product, index) in products" :key="index">
             <Product v-bind="setProductData(product)" />
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

      // If no category found
      if (!this.category.length) {
        this.$router.push({ path: '/404' })
        return
      }

      // Get products by category
      const response = await client.get('/wc/v3/products?category=' + this.category[0].id)
      this.products = response.data
    },

    // Format product data to filter product keys that we pass to <Product /> props
    setProductData (product) {
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        images: product.images
      }
    }
  }
}
</script>

<style lang="scss">

</style>
