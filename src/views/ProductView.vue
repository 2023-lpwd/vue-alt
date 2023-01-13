<template>
  <div class="product-view">
    <div class="container">
      <div class="row">
        <div class="product-view__gallery | column -size-6">
          <ProductGallery :images="product.images" />
        </div>
        <div class="product-view__content | column -size-6">
          <h1 class="product-view__name">{{ product.name }}</h1>
          <span class="product-view__sku">{{ product.sku }}</span>
          <p class="product-view__price">{{ product.price }}€</p>
          <div class="product-view__description">
            <div v-if="product.dimensions" class="product-view__dimensions">
              <p class="product-view__subtitle">Dimensions du produit :</p>
              <ul>
                <li class="product-view__dimensions-item">Longueur : {{ product.dimensions.length }}cm</li>
                <li class="product-view__dimensions-item">Largeur : {{ product.dimensions.width }}cm</li>
                <li class="product-view__dimensions-item">Hauteur : {{ product.dimensions.height }}cm</li>
              </ul>
            </div>
            <p class="product-view__subtitle">Description du produit :</p>
            <div class="product-view__description-content" v-html="product.short_description" />
          </div>
          <div class="product-view__add-to-cart" @click="addToCart">
            <MyButton>Ajouter au panier</MyButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import ProductGallery from "@/components/ProductGallery.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton, ProductGallery },
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
    },

    addToCart () {
      this.$store.commit('add', { ...this.product })
    }
  }
};
</script>

<style lang="scss">
.product-view {

  &__content {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  &__name {
    margin: 0;
  }

  &__sku {
    display: inline-block;
    margin: 5px 0 0 0;
  }

  &__price {
    font-size: 25px;
    font-weight: 700;
    color: $secondary-color
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 700;
    color: $secondary-color;
  }

}
</style>
