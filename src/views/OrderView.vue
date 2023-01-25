<template>
  <div class="order-view">
    <div class="container">
      <h1>Valider ma commande</h1>
      <form action="" class="order-view__form">
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="firstname">Prénom</label>
              <input class="order-view__input" id="firstname" type="text" v-model="billing.first_name">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="lastname">Nom</label>
              <input class="order-view__input" id="lastname" type="text" v-model="billing.last_name">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="address_1">Adresse</label>
              <input class="order-view__input" id="address_1" type="text" v-model="billing.address_1">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="address_2">Complément d'adresse</label>
              <input class="order-view__input" id="address_2" type="text" v-model="billing.address_2">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="city">Ville</label>
              <input class="order-view__input" id="city" type="text" v-model="billing.city">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="state">État/Région</label>
              <input class="order-view__input" id="state" type="text" v-model="billing.state">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="postcode">Code postal</label>
              <input class="order-view__input" id="postcode" type="text" v-model="billing.postcode">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="country">Pays</label>
              <select id="country" class="order-view__input" v-model="billing.country">
                <option value="DE">Allemagne</option>
                <option value="UK">Royaume-Uni</option>
                <option value="CH">Suisse</option>
                <option value="IT">Italie</option>
                <option value="FR">France</option>
                <option value="ES">Espagne</option>
              </select>
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="email">Email</label>
              <input class="order-view__input" id="email" type="email" v-model="billing.email">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="phone">Téléphone</label>
              <input class="order-view__input" id="phone" type="text" v-model="billing.phone">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-12">
            <input type="checkbox" id="other-address" v-model="otherAddress">
            <label for="other-address">Je souhaite livrer à une autre adresse</label>
          </div>
        </div>
        <div class="order-view__shipping" v-if="otherAddress">
          <div class="order-view__row || row">
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-firstname">Prénom</label>
                <input class="order-view__input" id="shipping-firstname" type="text" v-model="shipping.first_name">
              </div>
            </div>
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-lastname">Nom</label>
                <input class="order-view__input" id="shipping-lastname" type="text" v-model="shipping.last_name">
              </div>
            </div>
          </div>
          <div class="order-view__row || row">
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-address_1">Adresse</label>
                <input class="order-view__input" id="shipping-address_1" type="text" v-model="shipping.address_1">
              </div>
            </div>
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-address_2">Complément d'adresse</label>
                <input class="order-view__input" id="shipping-address_2" type="text" v-model="shipping.address_2">
              </div>
            </div>
          </div>
          <div class="order-view__row || row">
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-city">Ville</label>
                <input class="order-view__input" id="shipping-city" type="text" v-model="shipping.city">
              </div>
            </div>
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-state">État/Région</label>
                <input class="order-view__input" id="shipping-state" type="text" v-model="shipping.state">
              </div>
            </div>
          </div>
          <div class="order-view__row || row">
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-postcode">Code postal</label>
                <input class="order-view__input" id="shipping-postcode" type="text" v-model="shipping.postcode">
              </div>
            </div>
            <div class="column -size-6">
              <div class="order-view__field">
                <label class="order-view__label" for="shipping-country">Pays</label>
                <select id="country" class="order-view__input" v-model="shipping.country">
                  <option value="DE">Allemagne</option>
                  <option value="UK">Royaume-Uni</option>
                  <option value="CH">Suisse</option>
                  <option value="IT">Italie</option>
                  <option value="FR">France</option>
                  <option value="ES">Espagne</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div @click="confirmInformation">Valider les informations</div>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import { client } from "@/utils/axios";

export default {
  components: { MyButton },
  data () {
    return {
      otherAddress: false,
      billing: {
        first_name: '',
        last_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
        email: '',
        phone: ''
      },
      shipping: {
        first_name: '',
        last_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
      }
    }
  },

  methods: {
    async confirmInformation () {
      const line_items = this.$store.state.cart.map(product => {
        return {
          product_id: product.id,
          quantity: product.quantity
        }
      })

      // Try catch block will capture any error that occurs in the try {} part
      try {
        const response = await client.post('/wc/v3/orders', {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: this.billing,
          shipping: this.otherAddress ? this.shipping : this.billing,
          line_items: line_items,
          shipping_lines: [
            {
              method_id: "flat_rate",
              method_title: "Flat Rate",
              total: "10.00"
            }
          ]
        })
        this.$store.commit('emptyCart')
      } catch (err) {
        console.log(err)
      }

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
