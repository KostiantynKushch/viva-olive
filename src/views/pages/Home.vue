<template>
  <main>
    <Intro />
    <Hero />
    <Menu />
    <Season />
    <Booking />
    <TestTypography />
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/views/sections/Hero.vue";
import Intro from "@/views/sections/Intro.vue";
import Menu from "@/views/sections/Menu.vue";
import Season from "@/views/sections/Season.vue";
import Booking from "@/views/sections/Booking.vue";
import TestTypography from "@/components/TestTypography.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Intro,
    Menu,
    Season,
    Booking,
    TestTypography
  },
  data() {
    return {};
  },

  created() {}
};
</script>
