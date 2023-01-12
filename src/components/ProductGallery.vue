<template>
  <div class="product-gallery">
    <!-- Image active -->
    <div v-if="active" class="product-gallery__active" :style="`background-image: url('${active.src}')`" />
    <!-- Liste d'images -->
    <div class="product-gallery__list">
      <div class="row">
        <div v-for="(image, index) in images" class="product-gallery__image | column -size-3" :style="`background-image: url('${image.src}')`" @click="onImageClick(image)" />
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

  methods: {
    onImageClick (image) {
      this.active = image
    }
  }
};
</script>

<style lang="scss">
.product-gallery {

  &__active {
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
  }

  &__image {
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
  }
}
</style>
