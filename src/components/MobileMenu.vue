<template>
  <div class="ba-mob-menu">
    <HeaderCartButton class="ba-mob-menu__cart" />
    <Hamburger class="ba-mob-menu__hamb" />
    <transition name="slide-fade">
      <MobileNav v-if="showMobNav" :links="links" />
    </transition>
  </div>
  <!-- /.ba-mob-menu -->
</template>

<script>
import { EventBus } from "@/main.js";

import Hamburger from "@/components/Hamburger.vue";
import MobileNav from "@/components/MobileNav.vue";
import HeaderCartButton from "@/components/HeaderCartButton.vue";

export default {
  props: {
    links: {
      type: Array
    }
  },
  data() {
    return {
      showMobNav: false
    };
  },
  methods: {},
  components: {
    MobileNav,
    Hamburger,
    HeaderCartButton
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

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__hamb {
    text-align: right;
  }
  &__cart {
    margin-right: 10%;
  }
}
</style>