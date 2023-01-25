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
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="address_1">Adresse</label>
              <input class="order-view__input" id="address_1" type="text" v-model="address_1">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="address_2">Complément d'adresse</label>
              <input class="order-view__input" id="address_2" type="text" v-model="address_2">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="city">Ville</label>
              <input class="order-view__input" id="city" type="text" v-model="city">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="state">État/Région</label>
              <input class="order-view__input" id="state" type="text" v-model="state">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="postcode">Code postal</label>
              <input class="order-view__input" id="postcode" type="text" v-model="postcode">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="country">Pays</label>
              <input class="order-view__input" id="country" type="text" v-model="country">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="email">Email</label>
              <input class="order-view__input" id="email" type="text" v-model="email">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="phone">Téléphone</label>
              <input class="order-view__input" id="phone" type="text" v-model="phone">
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first_name: null,
      last_name: null,
      address_1: null,
      address_2: null,
      city: null,
      state: null,
      postcode: null,
      country: null,
      email: null,
      phone: null
    }
  }
}
</script>

<style lang="scss">
.order-view {

  &__row {
    margin-top: 30px;
  }

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
