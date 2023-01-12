<template>
  <div class="products-view">
    <div class="container">
      <h1 class="products-view__title">Mes produits</h1>
      <div class="row">
        <div class="column -size-3">
          <!-- Filtres -->
        </div>
        <div class="column -size-9">
          <div class="products-view__list">
            <div class="row">
              <div class="column -size-3" v-for="(product, index) in filteredProducts" :key="index">
                <Product :name="product.name" :price="product.price" :images="product.images" />
              </div>
            </div>
          </div>
        </div>
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

  computed: {
    filteredProducts () {
      return this.products.filter((product) => {
        return product.categories.find(category => category.slug === 'chambre')
      })
    }
  },

  async mounted () {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products")
    this.products = productResponse.data
  }
};
</script>

<style lang="scss">

</style>
