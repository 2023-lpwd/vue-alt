<template>
  <div class="header">
    <div class="header__container | container">
      <p class="header__title"><RouterLink class="header__link" to="/">titre du site</RouterLink></p>
      <ul class="header__navigation">
        <li class="header__navigation-item" v-for="(category, index) in categories" :key="index">
          <RouterLink :class="'header__link'" :to="`/category/${category.slug}`">
            {{ category.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="header__cart">
        {{ $store.state.count }}
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";

export default {
  data () {
    return {
      categories: []
    }
  },

  async mounted () {
    const response = await client.get('/wc/v3/products/categories')
    this.categories = response.data
  }
}
</script>

<style lang="scss">
.header {
  padding: 2rem;
  background-color: grey;

  &__container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  &__title {
    display: inline-block;
    font-size: 20px;
    color: white;
    font-weight: 700;
  }

  &__navigation {
    display: flex;
    flex-flow: row wrap;
    padding-left: 50px;
  }

  &__navigation-item {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }

  &__link {
    font-weight: 700;
    color: white;
    text-decoration: none;
  }

  &__cart {
    font-size: 20px;
    color: white;
    margin-left: auto;
  }
}
</style>
