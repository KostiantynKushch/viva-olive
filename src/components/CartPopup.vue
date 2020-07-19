<template>
  <div class="ba-cart-popup ba-overlay">
    <div class="ba-container">
      <div class="ba-cart-popup__modal">
        <button
          @click="toggleModal"
          aria-label="close the cart popup"
          class="ba-close-btn ba-cart-popup__close"
        ></button>
        <h3 class="ba-cart-popup__title">Кошик</h3>
        <!-- /.ba-cart-popup__title -->
        <div class="ba-cart-popup__header ba-popup-header">
          <p class="ba-subtitle ba-subtitle--accent popup-header__name">Страва</p>
          <p class="ba-subtitle ba-subtitle--accent popup-header__quantity">Кількість</p>
          <p class="ba-subtitle ba-subtitle--accent popup-header__price">Ціна</p>
        </div>
        <!-- /.ba-cart-popup__header -->
        <div class="ba-cart-popup__body">
          <p v-if="cart.length == 0" class="ba-placeholder">Your Cart is Empty</p>
          <order
            v-if="cart.length > 0 && confirm == false"
            :order="cart"
            @removedItem="removeItem"
            @increasedQuantity="increaseQuantity"
            @reducedQuantity="reduceQuantity"
          />
          <confirmation v-if="cart.length > 0 && confirm == true" />
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
import CartPopupConfirmation from "@/components/CartPopupConfirmation";

export default {
  data() {
    return {
      cart: [],
      sum: 0,
      confirm: false
    };
  },
  methods: {
    toggleModal() {
      EventBus.$emit("toggleModal");
    },
    toConfirmation() {
      if (this.cart.length > 0) {
        this.confirm = true;
      }
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
    order: CartPopupOrder,
    confirmation: CartPopupConfirmation
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
  //   padding: 20vh 15vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &__modal {
    background: $white;
    position: relative;
    padding: 30px 20px 30px;
    max-height: 80vh;
    width: 90vw;
    overflow-y: auto;
    @media screen and (min-width: 1024px) {
      width: 60vw;
      padding: 17px 75px 83px;
    }
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  &__title {
    text-align: center;
  }
  &__header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    border-bottom: 1px solid #747436;
    @media screen and (min-width: 768px) {
      grid-template-columns: 3fr 2fr 1fr 1fr;
    }
  }
  &__body {
    padding: 30px 0;
    border-bottom: 1px solid #747436;
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    flex-wrap: wrap;
    @media screen and (min-width: 450px) {
      padding-top: 55px;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
  &__total {
    font-size: 14px;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
}
.ba-overlay {
}

.popup-header {
  // .popup-header__name

  &__name {
  }

  // .popup-header__quantity

  &__quantity {
    @media screen and (min-width: 768px) {
      text-align: center;
    }
  }

  // .popup-header__price

  &__price {
    text-align: center;
  }
}
</style>