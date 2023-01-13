<template>
  <div class="product">
    <RouterLink :class="'product__link'" :to="`/products/${slug}`">
      <img v-if="image" class="product__image" :src="image" alt="">
      <p class="product__name">{{ name }}</p>
      <span class="product__price">{{ price }}€</span>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    price: {
      type: String,
    },
    slug: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    image () {
      if (!this.images.length) return
      return this.images[0].src
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__link {
    text-decoration: none;
  }

  &__image {
    width: 100%;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    color: #243b3b;
    margin-top: 10px;
  }

  &__price {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: $secondary-color;
    margin-top: 5px;
  }
}
</style>
