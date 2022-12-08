<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>
<template>
  <a v-if="link" :href="link" class="button">{{ text }}</a>
  <button v-else class="button">{{ text }}</button>
</template>
<style lang="scss" scoped>
.button {
  padding: 0.5rem;
  display: inline-block;
  background: $primary-color;
  color: white;
  border: 1px solid $primary-color;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: "Arial";
  line-height: 1rem;
  &:hover {
    color: $primary-color;
    background: white;
  }
}
</style>
