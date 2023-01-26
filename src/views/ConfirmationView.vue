<template>
  <div class="confirmation-view">
    <div class="container">
      {{ id }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss">

</style>
