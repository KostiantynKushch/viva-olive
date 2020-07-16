<template>
  <div class="ba-cart" @click="toggleModal">
    <svg class="ba-cart__icon">
      <use :xlink:href="require('@/assets/icons/sprite.svg')+'#cart_icon'" />
    </svg>
    <p class="ba-cart__counter">({{productsCounter}})</p>
    <!-- /.ba-cart__counter -->
  </div>
  <!-- /.ba-cart -->
</template>

<script>
import { EventBus } from "@/main.js";
export default {
  data() {
    return {
      productsCounter: 0,
    };
  },
  created() {
    EventBus.$on("totalQuantity", getQuantity => {
      this.productsCounter = getQuantity;
    });
  },
  methods: {
    toggleModal() {
      EventBus.$emit("toggleModal");
    }
  }
};
</script>

<style lang="scss">
.ba-cart {
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  // .ba-cart__icon

  &__icon {
    width: 35px;
    height: 47px;
  }
  &__counter {
    font-size: 20px;
    line-height: 1.35;
    padding-top: 5px;
    margin-left: 10px;
    color: currentColor;
  }
}
</style>