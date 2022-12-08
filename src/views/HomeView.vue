<script>
import MyButton from "./../components/MyButton.vue";
import MyMenu from "./../components/MyMenu.vue";
import MyTitle from "./../components/MyTitle.vue";
export default {
  components: {
    MyButton,
    MyMenu,
    MyTitle,
  },
};
</script>

<template>
  <main>
    <MyMenu />

    <MyTitle text="Mon petit titre h1" type="h1" size="small" />
    <MyTitle text="Mon titre normal h3" type="h3" />
    <MyTitle text="Mon grand titre h2 " type="h2" size="big" />

    <MyButton
      text="Clique ici pour aller sur la page contact !"
      link="/contact"
    />
    <MyButton text="Clique là pour aller sur la HP !" link="/" />
    <MyButton text="Cliquez ici !" />
  </main>
</template>
