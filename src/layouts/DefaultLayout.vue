<template>
  <main>
    <header>
      <slot name="header"></slot>
    </header>
    <article>
      <slot></slot>
    </article>
    <aside>
      <slot name="aside"></slot>
    </aside>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template:
    "header"
    "article"
    "aside"
    "footer";
  @include medium-up() {
    grid-template:
      "header header header"
      "aside article article"
      "footer footer footer";
  }
  & > * {
    padding: 1rem;
  }
  header,
  footer {
    background: $primary-color;
    color: white;
  }
  header {
    grid-area: header;
  }
  footer {
    grid-area: footer;
  }
  aside {
    grid-area: aside;
  }
  article {
    grid-area: article;
  }
}
</style>
