<template>
  <div v-if="active" class="product-gallery">
    <!-- Image active -->
    <div class="product-gallery__image" :style="`background-image: url('${active.src}')`" />
    <!-- Liste d'images -->
    <div class="product-gallery__list">
      <div class="row">
        <div v-for="(image, index) in images" class="column -size-3">
          <div :class="['product-gallery__image', { '-is-active': active.id === image.id }]" :style="`background-image: url('${image.src}')`" @click="onImageClick(image)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      active: null
    }
  },

  watch: {
    images (value) {
      this.active = value[0]
    }
  },

  methods: {
    onImageClick (image) {
      this.active = image
    }
  }
};
</script>

<style lang="scss">
.product-gallery {

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin-top: 30px;
  }

  &__image {
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;

    &.-is-active {
      opacity: 0.5;
    }
  }
}
</style>
