<template>
  <div class="confirmation-view">
    <div class="container">
      <h1>Merci pour votre commande {{ order.billing.first_name }} {{ order.billing.last_name }} !</h1>

      <p>Récapitulatif de votre commande</p>
      <ul>
        <li v-for="(product, index) in order.line_items">
          {{ product.name }} : {{ product.price }}€ - x{{ product.quantity }}
        </li>
      </ul>

      <p>
        Vous serez bientôt averti de l'expédition de vos produits, la livraison est prévue dans les 3 jours ouvrés à l'adresse {{ order.shipping.address_1 }} {{ order.shipping.address_2 }} à {{ order.shipping.city }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: null
    }
  },
  created () {
    this.order = JSON.parse(localStorage.getItem('order'))
    console.log(this.order);
  }
}
</script>

<style lang="scss">

</style>
