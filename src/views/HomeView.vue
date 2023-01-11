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
        <div class="column -size-3" v-for="(product, index) in products" :key="index">
          <Product :name="product.name" :price="product.price" :images="product.images" />
        </div>
      </div>
      <p style="margin-top: 100px;">Mes categories de produit</p>
      <ul>
        <li v-for="(category, index) in categories">
          <span>{{ category.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { client } from '@/utils/axios'
import Product from "@/components/Product.vue";

export default {
  components: { Product },
  data() {
    return {
      posts: [],
      products: [],
      categories: [],
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

  }
};
</script>

<style lang="scss"></style>
