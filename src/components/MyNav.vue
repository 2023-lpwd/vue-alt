<style lang="scss" scoped>
$item-background: #161616;
$item-text-color: #7b7b7b;
$item-title-color: white;
$item-border-color: #dac52a;
$item-border-secondary-color: #c8328f;

.item {
  background: $item-background;
  border-radius: 5px;
  max-width: 400px;
  padding: 20px;
  margin: 20px;
  $this: &;
  &:hover {
    #{$this}__text {
      color: white;
    }
  }
  &__button {
    margin-top: 200px;
  }
  &__image {
    border-bottom: 5px $item-border-color solid;
    @include only-small {
      border: none;
    }
    &.-secondary {
      border-color: $item-border-secondary-color;
    }
    &.-larger {
      border-width: 20px;
    }
    img {
      vertical-align: middle;
      max-width: 100%;
    }
  }
  &__titre {
    color: $item-title-color;
  }
  &__text {
    color: $item-text-color;
  }
}
</style>
