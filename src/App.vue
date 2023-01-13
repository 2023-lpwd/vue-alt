<script>
import { RouterView } from "vue-router";
import Header from '@/components/Header.vue'
export default {
  components: {
    RouterView,
    Header
  },

  mounted () {
    const stringifiedCart = localStorage.getItem('cart')
    this.$store.commit('set', JSON.parse(stringifiedCart))
  }
}
</script>

<template>
  <Header />
  <RouterView />
</template>
