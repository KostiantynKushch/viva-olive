<template>
  <div class="ba-mob-menu">
    <ba-tasty-burger-button
      :type="buttonType"
      :active="isActive"
      :size="size"
      :color="color"
      :active-color="activeColor"
      @toggle="onToggle"
    />
    <transition name="slide-fade">
      <MobileNav v-if="showMobNav" @clickedNav="clickedNav" />
    </transition>
  </div>
  <!-- /.ba-mob-menu -->
</template>

<script>
// import Hamburger from "@/components/Hamburger.vue";
import { TastyBurgerButton } from "vue-tasty-burgers";

import MobileNav from "@/components/MobileNav.vue";

export default {
  data() {
    return {
      showMobNav: false,
      buttonType: "spin",
      isActive: false,
      size: "xl",
      color: "#2c2c11",
      activeColor: "#747436"
    };
  },
  methods: {
    onToggle(active) {
      // Toggle menu
      this.showMobNav = active;
    },
    clickedNav(value) {
      this.showMobNav = value;
    }
  },
  components: {
    "ba-tasty-burger-button": TastyBurgerButton,
    MobileNav
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>