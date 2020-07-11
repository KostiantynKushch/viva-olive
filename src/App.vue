<template>
  <div id="app">
    <Header v-if="pages" :navLinks="pages"></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      pages: null,
      locations: null
      // homeSections: null
    };
  },
  components: {
    Header,
    Footer
  },

  created() {
    fetch("data/pages.json")
      .then(result => result.json())
      .then(data => (this.pages = data));

    fetch("data/locations.json")
      .then(result => result.json())
      .then(data => console.log(data));
  },
  methods: {}
};
</script>

<style lang="scss">
// @import "@/assets/scss/typography";
@import "@/assets/scss/main";
</style>
