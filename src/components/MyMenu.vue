<script>
export default {
  data() {
    return {
      selectedIndex: null,
      items: [
        {
          id: "item-1",
          link: "#",
          label: "lien1",
        },
        {
          id: "item-2",
          link: "#section-1",
          label: "lien2",
        },
        {
          id: "item-3",
          link: "#section-2",
          label: "lien3",
        },
        {
          id: "item-4",
          link: "#section-3",
          label: "lien4",
        },
      ],
    };
  },
  methods: {
    handleClick(index) {
      this.selectedIndex = index;
    },
  },
};
</script>
<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="(item, index) in items"
        @click="handleClick(index)"
        :key="item.id"
      >
        <a
          :class="`menu__link ${index === selectedIndex ? '-active' : ''}`"
          :href="item.link"
          >{{ item.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.menu {
  &__list {
    display: flex;
  }
  &__link {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    border-bottom: 1px solid $primary-color;
    color: $primary-color;
    margin: 0.25rem;
    &.-active {
      background: $primary-color;
      color: white;
    }
  }
}
</style>
