<template>
  <div class="cart-product">
    <img v-if="image" class="cart-product__image" :src="image" alt="">
    <p class="cart-product__name">{{ name }}</p>
    <span class="cart-product__quantity">Quantité : {{ quantity }}</span>
    <span class="cart-product__price">Prix : {{ price }}€</span>
    <span class="cart-product__price -is-total">Total : {{ total }}€</span>
    <span class="cart-product__delete" @click="onDeleteClick">X</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
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
    },
    quantity: {
      type: Number,
      default: null
    }
  },

  computed: {
    total () {
      return this.price * this.quantity
    },
    image () {
      if (!this.images.length) return
      return this.images[0].src
    }
  },

  methods: {
    onDeleteClick () {
      this.$store.commit('remove', this.id)
    }
  }
};
</script>

<style lang="scss">
.cart-product {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  &__image {
    width: 200px;
    height: auto;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    margin-left: 100px;
  }

  &__quantity {
    margin-left: 100px;
  }

  &__price {
    display: inline-block;
    font-size: 18px;
    margin-left: auto;

    &.-is-total {
      margin-left: 50px;
    }
  }

  &__delete {
    font-size: 25px;
    font-weight: 700;
    color: black;
    cursor: pointer;
    margin-left: 100px;

    &:hover {
      color: red;
    }
  }
}
</style>
