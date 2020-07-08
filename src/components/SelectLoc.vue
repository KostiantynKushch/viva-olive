<template>
  <div class="ba-select-loc">
    <svg class="icon">
      <use xlink:href="@/assets/icons/sprite.svg#location" />
    </svg>
    <select name="locations" class="locations">
      <option
        v-for="location in locations"
        :key="location.key"
        :value="location.name"
      >{{location.name}}</option>
    </select>
  </div>
  <!-- /.ba-select-loc -->
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          key: 1,
          name: "Полтава"
        },
        {
          key: 2,
          name: "Кременчук"
        },
        {
          key: 3,
          name: "Суми"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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