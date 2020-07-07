<template>
  <div class="ba-mob-menu">
    <Hamburger class="ba-mob-menu__hamb" />
    <transition name="slide-fade">
      <MobileNav v-if="showMobNav" />
    </transition>
  </div>
  <!-- /.ba-mob-menu -->
</template>

<script>
import { EventBus } from "@/main.js";

import Hamburger from "@/components/Hamburger.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  data() {
    return {
      showMobNav: false
    };
  },
  methods: {},
  components: {
    MobileNav,
    Hamburger
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      this.showMobNav = false;
      // transfer data to child component
      EventBus.$emit("hiddenMenu", this.showMobNav);
    },
    showMobNav() {
      if (this.showMobNav) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    }
  },
  created() {
    //   get data from shilde component
    EventBus.$on("toggledHamb", isActive => {
      this.showMobNav = isActive;
    });
  }
};
</script>

<style lang="scss">
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
.ba-mob-menu {
  // .ba-mob-menu__hamb

  &__hamb {
    text-align: right;
  }
}
</style>