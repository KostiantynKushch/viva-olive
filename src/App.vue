<template>
  <div calss="app">
    <Header v-if="pages" :navLinks="pages"></Header>
    <transition name="fade">
      <CartPopup v-show="modalOpen" />
    </transition>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CartPopup from "@/components/CartPopup.vue";
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      pages: null,
      locations: null,
      modalOpen: false
    };
  },
  components: {
    Header,
    Footer,
    CartPopup
  },

  created() {
    fetch("data/pages.json")
      .then(result => result.json())
      .then(data => (this.pages = data));

    EventBus.$on("toggleModal", () => {
      this.modalOpen = !this.modalOpen;
    });

    // hide modal on 'Esc'
    addEventListener("keydown", event => {
      if (event.key === "Escape" && this.modalOpen == true) {
        this.modalOpen = false;
      }
    });
  }
};
</script>

<style lang="scss">
// @import "@/assets/scss/typography";
@import "@/assets/scss/main";
.app {
  position: relative;
}
</style>
