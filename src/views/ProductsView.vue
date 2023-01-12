<template>
  <div class="products-view">
    <div class="container">
      <div class="row">
        <div class="column -size-3">
          {{ filters }}
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="cuisine" name="cuisine" value="cuisine">
            <label for="cuisine">Cuisine</label>
          </div>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="chambre" name="chambre" value="chambre">
            <label for="chambre">Chambre</label>
          </div>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="salon-sejour" name="salon-sejour" value="salon-sejour">
            <label for="salon-sejour">Salon/Séjour</label>
          </div>
        </div>
        <div class="column -size-9">
          <h1 class="products-view__title">Mes produits</h1>
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
      products: [],
      filters: []
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
  },

  methods: {
    onChange ($event) {
      console.log($event)
    }
  }
};
</script>

<style lang="scss">

</style>
