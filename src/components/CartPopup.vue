<template>
  <div class="ba-cart-popup ba-overlay">
    <div class="ba-container">
      <div class="ba-cart-popup__modal">
        <button @click="toggleModal">Close</button>
        <p>{{cart}}</p>
      </div>
      <!-- /.ba-cart-popup__modal -->
    </div>
    <!-- /.ba-container -->
  </div>
  <!-- /.ba-cart -->
</template>

<script>
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    toggleModal() {
      EventBus.$emit("toggleModal");
    }
  },
  created() {
    EventBus.$on("order", cart => {
      this.cart = cart;
    });
  }
};
</script>

<style lang="scss">
.ba-cart-popup {
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background: rgba($color: #000, $alpha: 0.3);
  backdrop-filter: blur(5px);
  padding: 20vh 15vw;

  &__modal {
    background: $white;
  }
}
.ba-overlay {
}
</style>