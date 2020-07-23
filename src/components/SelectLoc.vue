<template>
  <div v-if="locations" class="ba-select-loc">
    <svg class="icon">
      <use xlink:href="@/assets/icons/sprite.svg#location" />
    </svg>
    <select
      name="locations"
      class="locations"
      v-model="currentLock"
      :value="currentLock"
      @change="emitLock"
    >
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
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      locations: null,
      currentLock: "",
    };
  },
  methods: {
    emitLock() {
      EventBus.$emit("currentLock", this.currentLock);
    },
  },
  created() {
    fetch("data/locations.json")
      .then((result) => result.json())
      .then((data) => {
        this.locations = data.locations;
      })
      .then(() => {
        this.currentLock = this.locations[0].name;
        this.emitLock();
      });
  },
};
</script>

<style lang="scss" >
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