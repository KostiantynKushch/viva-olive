<template>
  <main>
    <Intro />
    <Hero />
    <Menu />
    <Season />
    <Booking />
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/views/sections/Hero.vue";
import Intro from "@/views/sections/Intro.vue";
import Menu from "@/views/sections/Menu.vue";
import Season from "@/views/sections/Season.vue";
import Booking from "@/views/sections/Booking.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Intro,
    Menu,
    Season,
    Booking,
  },
  data() {
    return {};
  },

  created() {},
  metaInfo: {
    title: "Viva Olive",
    titleTemplate: "%s | Головна",
    meta: [
      {
        name: "description",
        content: 'Ресторан "VIVA OLIVE" запрошує всіх бажаючих на обід!',
      },
    ],
  },
};
</script>
