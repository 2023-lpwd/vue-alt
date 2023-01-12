<template>
  <div class="products-view">
    <div class="container">
      <div class="row">
        <div class="column -size-3">
          <p class="products-view__filter-title">Filtre par pièce</p>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="cuisine" name="cuisine" value="cuisine">
            <label class="products-view__label" for="cuisine">Cuisine</label>
          </div>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="chambre" name="chambre" value="chambre">
            <label class="products-view__label" for="chambre">Chambre</label>
          </div>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="salon-sejour" name="salon-sejour" value="salon-sejour">
            <label class="products-view__label" for="salon-sejour">Salon/Séjour</label>
          </div>
          <p class="products-view__filter-title">Filtre par prix</p>
          <input type="range" min="0" max="2000">
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
      // If no filters selected
      if (!this.filters.length) return this.products

      // At least one filter selected
      return this.products.filter((product) => {
        return product.categories.find(category => this.filters.includes(category.slug))
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
.products-view {
  &__label {
    font-size: 16px;
    font-weight: 500;
  }

  &__filter-title {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
