<script>
export default {
  data() {
    return {
      classname: `title -${this.size}`,
    };
  },
  props: {
    text: String,
    type: String,
    size: String,
  },
};
</script>
<template>
  <h1 v-if="type === 'h1'" :class="classname">{{ text }}</h1>
  <h2 v-else-if="type === 'h2'" :class="classname">{{ text }}</h2>
  <h3 v-else-if="type === 'h3'" :class="classname">{{ text }}</h3>
  <h4 v-else :class="classname">{{ text }}</h4>
</template>
<style lang="scss" scoped>
.title {
  font-family: $title-font-familly;
  font-weight: bold;
  font-size: 32px;
  &.-big {
    font-size: 46px;
  }
  &.-small {
    font-size: 20px;
  }
}
</style>
