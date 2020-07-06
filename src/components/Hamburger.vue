<template>
  <button @click="toggle" :class="{'ba-hamburger--active' : isActive}" class="ba-hamburger">
    <div class="ba-hamburger__stick"></div>
  </button>
</template>

<script>
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle() {
      // Toggle menu
      this.isActive = !this.isActive;
      //emit EventBus for transfer data to parent menu
      EventBus.$emit("toggledHamb", this.isActive);
    }
  },
  created() {
    //   get data from parent menu
    EventBus.$on("hiddenMenu", showMobNav => {
      this.isActive = showMobNav;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.ba-hamburger {
  border: none;
  background: transparent;
  height: 29px;
  width: 40px;
  padding: 0;
  outline: none;
  position: relative;

  &:hover,
  &:focus {
    .ba-hamburger__stick {
      background: rgba($color: $dark_olive, $alpha: 1);
      &:before,
      &:after {
        background: $dark_olive;
      }
    }
  }

  &__stick {
    height: 3px;
    width: 100%;
    border-radius: 5px;
    background: rgba($color: $for_light_bg, $alpha: 1);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 3px;
      width: 100%;
      border-radius: 5px;
      background: $for_light_bg;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 3px;
      width: 100%;
      border-radius: 5px;
      background: $for_light_bg;
    }
  }
  &--active {
    .ba-hamburger__stick {
    }
  }
}
</style>