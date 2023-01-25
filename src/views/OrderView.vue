<template>
  <div class="order-view">
    <div class="container">
      <h1>Valider ma commande</h1>
      <form action="" class="order-view__form">
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="firstname">Prénom</label>
              <input class="order-view__input" id="firstname" type="text" v-model="first_name">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="lastname">Nom</label>
              <input class="order-view__input" id="lastname" type="text" v-model="last_name">
            </div>
          </div>
        </div>
        Le prénom est : {{ first_name }} le nom est {{ last_name }}
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first_name: null,
      last_name: null
    }
  }
}
</script>

<style lang="scss">
.order-view {
  &__field {
    display: flex;
    flex-flow: column wrap;
  }

  &__label {
    font-size: 18px;
    font-weight: 500;
  }

  &__input {
    padding: 10px;
    margin-top: 10px;
  }
}
</style>
