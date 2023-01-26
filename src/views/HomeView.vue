<template>
  <div class="homeview">
    <div class="container">
      <p>Mes articles</p>
      <ul>
        <li v-for="(post, index) in posts">
          <span>{{ post.title.rendered }}</span>
        </li>
      </ul>
      <p style="margin-top: 100px;">Mes produits</p>
      <div class="row">
        <div class="column -size-3 -size-4-md" v-for="(product, index) in products" :key="index">
          <Product :name="product.name" :slug="product.slug" :price="product.price" :images="product.images" />
        </div>
      </div>
      <p style="margin-top: 100px;">Mes categories de produit</p>
      <ul>
        <li v-for="(category, index) in categories">
          <span>{{ category.name }}</span>
        </li>
      </ul>
    </div>
    <div v-if="page.acf" class="homeview__showroom">
      <Showroom :title="page.acf.title" :images="page.acf.images" />
    </div>
  </div>
</template>

<script>
import { client } from '@/utils/axios'
import Product from "@/components/Product.vue";
import Showroom from "@/components/Showroom.vue";

export default {
  components: { Showroom, Product },
  data () {
    return {
      posts: [],
      products: [],
      categories: [],
      page: {}
    };
  },

  async mounted() {
    // Get all wordpress posts
    const response = await client.get("/wp/v2/posts")
    this.posts = response.data


    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products")
    this.products = productResponse.data

    // Get all woocommerce categories
    const categoriesResponse = await client.get("/wc/v3/products/categories")
    this.categories = categoriesResponse.data

    // Get homepage data
    const homepageResponse = await client.get("/wp/v2/pages/27")
    this.page = homepageResponse.data
  }
};
</script>

<style lang="scss"></style>
