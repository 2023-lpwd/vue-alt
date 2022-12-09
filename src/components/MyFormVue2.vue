<script>
import MyButton from "./MyButton.vue";
export default {
  data() {
    return {
      hasError: false,
      showPassword: false,
      email: "",
      password: "",
      newsletter: true,
    };
  },
  components: {
    MyButton,
  },
  methods: {
    handlePasswordClick() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      if (this.email.length === 0 || this.password.length === 0) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Email</label>
      <input v-model="email" name="email" type="text" />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        v-model="password"
        name="password"
        :type="showPassword ? 'text' : 'password'"
      />
      <p @click="handlePasswordClick">
        {{ showPassword ? "Masquer" : "Afficher" }} le mdp
      </p>
    </div>
    <div>
      <input
        v-model="newsletter"
        type="checkbox"
        id="newsletter"
        name="newsletter"
      />
      <label for="newsletter">J'accepte de m'abonner</label>
    </div>
    <div v-if="hasError">
      <p>Veuillez entrer toutes les informations</p>
    </div>
    <MyButton>Submit Form</MyButton>
  </form>
</template>
