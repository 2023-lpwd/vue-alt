<template>
  <div class="showroom">
    <div class="container">
      <h2 class="showroom__title">{{ title }}</h2>

      <div class="showroom__images | row">
        <div class="showroom__media | column -size-6" v-for="(image, index) in WPImages">
          <img :src="image.url" :alt="image.alt" class="showroom__image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    images: {
      type: Object,
      default: null
    }
  },

  computed: {
    WPImages () {
      if (!this.images) return
      const images = []

      // Check if left_image exists
      if (this.images.left_image) {
        images.push(this.images.left_image);
      }

      // Check if right_image exists
      if (this.images.right_image) {
        images.push(this.images.right_image);
      }

      // Return image urls
      return images
    }
  }
};
</script>

<style lang="scss">
.showroom {
  width: 100%;
  background-color: $secondary-color;
  padding: 150px 0;

  &__title {
    font-size: 45px;
    font-weight: 700;
    color: white;
  }

  &__images {
    margin-top: 50px;
  }

  &__media {
    &:nth-of-type(even) {
      transform: translate3d(0, 100px, 0);
    }
  }

  &__image {
    max-width: 100%;
  }
}
</style>
