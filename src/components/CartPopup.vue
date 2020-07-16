<template>
  <div class="ba-cart-popup ba-overlay">
    <div class="ba-container">
      <div class="ba-cart-popup__modal">
        <button
          @click="toggleModal"
          aria-label="close the cart popup"
          class="ba-close-btn ba-cart-popup__close"
        >Close</button>
        <h3 class="ba-cart-popup__title">Кошик</h3>
        <!-- /.ba-cart-popup__title -->
        <div class="ba-cart-popup__header">
          <p class="ba-subtitle ba-subtitle--accent">Страва</p>
          <p class="ba-subtitle ba-subtitle--accent">Кількість</p>
          <p class="ba-subtitle ba-subtitle--accent">Ціна</p>
        </div>
        <!-- /.ba-cart-popup__header -->
        <div class="ba-cart-popup__body">
          <p v-if="cart.length == 0">Your Cart is Empty</p>
          <order
            v-else
            :order="cart"
            @removedItem="removeItem"
            @increasedQuantity="increaseQuantity"
            @reducedQuantity="reduceQuantity"
          />
        </div>
        <!-- /.bacart-popup__body -->
        <div class="ba-cart-popup__footer">
          <p class="ba-cart-popup__total">
            Сума замовлення:
            <b>{{ `${orderSum} грн.`}}</b>
          </p>
          <a
            @click.prevent="toConfirmation"
            href="#"
            class="ba-button ba-button--small ba-button--olive"
          >Замовити</a>
        </div>
        <!-- /.ba-cart-popup__footer -->
      </div>
      <!-- /.ba-cart-popup__modal -->
    </div>
    <!-- /.ba-container -->
  </div>
  <!-- /.ba-cart -->
</template>

<script>
import { EventBus } from "@/main.js";
import CartPopupOrder from "@/components/CartPopupOrder";

export default {
  data() {
    return {
      cart: [],
      sum: 0
    };
  },
  methods: {
    toggleModal() {
      EventBus.$emit("toggleModal");
    },
    toConfirmation() {
      console.log("confirmation");
    },
    removeItem(item) {
      let updatedOrder = this.cart.filter(function(goods) {
        return goods != item;
      });
      this.cart = updatedOrder;
      EventBus.$emit("updatedCart", this.cart);
    },
    increaseQuantity(item) {
      item.quantity++;
      EventBus.$emit("updatedCart", this.cart);
    },
    reduceQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        EventBus.$emit("updatedCart", this.cart);
      }
    }
  },
  computed: {
    orderSum() {
      let sum = 0;
      this.cart.forEach(cartItem => {
        sum += cartItem.price * cartItem.quantity;
      });
      return sum;
    }
  },
  created() {
    EventBus.$on("order", cart => {
      this.cart = cart;
    });
  },
  components: {
    order: CartPopupOrder
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
    position: relative;
    padding: 17px 75px 83px;
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__title {
    text-align: center;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 130px;
    border-bottom: 1px solid #747436;
  }
  &__body {
    padding: 30px 0;
    border-bottom: 1px solid #747436;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 55px;
  }
}
.ba-overlay {
}
</style>