<script>
import MyMenu from "./../components/MyMenu.vue";
import MyScrollBackground from "./../components/MyScrollBackground.vue";
import MyTitle from "./../components/MyTitle.vue";
import MyForm from "../components/MyFormVue3.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
export default {
  components: {
    MyMenu,
    MyTitle,
    MyForm,
    DefaultLayout,
    MyScrollBackground,
  },
};
</script>

<template>
  <DefaultLayout>
    <template #header>
      <p>Un texte dans mon header</p>
    </template>
    <MyMenu />

    <MyTitle text="Mon petit titre h1" type="h1" size="small" />
    <MyTitle text="Mon titre normal h3" type="h3" />
    <MyTitle text="Mon grand titre h2 " type="h2" size="big" />
    <MyForm />

    <MyScrollBackground />
    <template #aside>
      <p>Un texte dans mon aside</p>
    </template>
    <template #footer>
      <p>Un texte dans mon Footer</p>
    </template>
  </DefaultLayout>
</template>
