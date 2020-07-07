<template>
  <div class="ba-select-loc">
    <svg class="icon">
      <use xlink:href="@/assets/icons/sprite.svg#location" />
    </svg>
    <select name="locations" class="locations">
      <option value="poltava">Полтава</option>
      <option value="poltava">Кременчук</option>
      <option value="poltava">Суми</option>
    </select>
  </div>
  <!-- /.ba-select-loc -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.ba-select-loc {
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
}

.icon {
  width: 10px;
  height: 15px;
  @media screen and (min-width: 1024px) {
    width: 17px;
    height: 25px;
  }
}
.locations {
  font-size: 20px;
  border: none;
  outline: none;
  background: transparent;
  margin-left: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: $dark_olive;
  }
}
</style>