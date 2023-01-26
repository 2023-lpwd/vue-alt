<template>
  <div class="confirmation-view">
    <div class="container">
      <h1>Merci pour votre commande [firstname] [lastname] !</h1>

      <p>Récapitulatif de votre commande</p>
      <ul>
        <li>[produit 1] : [prix]</li>
        <li>[produit 2] : [prix]</li>
      </ul>

      <p>
        Vous serez bientôt averti de l'expédition de vos produits, la livraison est prévue dans les 3 jours ouvrés à l'adresse [adresse]
      </p>
      {{ order }}
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
  }
}
</script>

<style lang="scss">

</style>
