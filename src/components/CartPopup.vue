<template>
  <div class="ba-cart-popup ba-overlay">
    <div class="ba-container">
      <div class="ba-cart-popup__modal">
        <button
          @click="toggleModal"
          aria-label="close the cart popup"
          class="ba-close-btn ba-cart-popup__close"
          title="Close"
        ></button>
        <button
          v-show="confirm && ordered == false"
          @click="confirm = false"
          aria-label="Go back to the previos step"
          class="ba-cart-popup__back ba-back"
          title="Back"
        ></button>
        <h3 v-show="confirm == false" class="ba-cart-popup__title">Кошик</h3>
        <h3 v-show="confirm && ordered == false" class="ba-cart-popup__title">Підтвердження</h3>
        <!-- /.ba-cart-popup__title -->
        <div v-show="confirm == false" class="ba-cart-popup__header ba-popup-header">
          <p class="ba-subtitle ba-subtitle--accent popup-header__name">Страва</p>
          <p class="ba-subtitle ba-subtitle--accent popup-header__quantity">Кількість</p>
          <p class="ba-subtitle ba-subtitle--accent popup-header__price">Ціна</p>
        </div>
        <!-- /.ba-cart-popup__header -->
        <div class="ba-cart-popup__body" :class="{'ba-cart-popup__body--confirmation' : confirm}">
          <p v-show="cart.length == 0" class="ba-placeholder">Your Cart is Empty</p>
          <order
            v-show="cart.length > 0 && confirm == false && ordered == false"
            :order="cart"
            @removedItem="removeItem"
            @increasedQuantity="increaseQuantity"
            @reducedQuantity="reduceQuantity"
          />
          <confirmation
            v-show="cart.length > 0 && confirm == true && ordered == false"
            :total="orderSum"
            @sendOrder="thankYou"
          />
          <thankyou v-show="ordered" />
        </div>
        <!-- /.bacart-popup__body -->
        <div class="ba-cart-popup__footer" v-show="confirm == false">
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
import CartPopupThankyou from "@/components/CartPopupThankyou";

export default {
  data() {
    return {
      cart: [],
      sum: 0,
      confirm: false,
      ordered: false,
      totalQuantity: 0,
    };
  },
  methods: {
    thankYou() {
      this.ordered = true;
    },
    clearCart() {
      //clear cart after ordering
      if (this.ordered == true) {
        this.cart = [];
        this.sum = 0;
        this.confirm = false;
        this.ordered = false;
        EventBus.$emit("totalQuantity", this.totalQuantity);
        EventBus.$emit("updatedCart", this.cart);
      }
    },
    toggleModal() {
      EventBus.$emit("toggleModal");
      this.clearCart();
    },
    toConfirmation() {
      if (this.cart.length > 0) {
        this.confirm = true;
        console.log(this.orderSum);
      }
    },
    removeItem(item) {
      let updatedOrder = this.cart.filter(function (goods) {
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
    },
  },
  computed: {
    orderSum() {
      let sum = 0;
      this.cart.forEach((cartItem) => {
        sum += cartItem.price * cartItem.quantity;
      });
      return sum;
    },
  },
  created() {
    EventBus.$on("order", (cart) => {
      this.cart = cart;
    });
  },
  components: {
    order: CartPopupOrder,
    confirmation: CartPopupConfirmation,
    thankyou: CartPopupThankyou,
  },
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
      width: 73vw;
      padding: 17px 75px 70px;
    }
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__back {
    position: absolute;
    top: 10px;
    left: 10px;
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
    &--confirmation {
      border: none;
    }
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
    &--confirmation {
      flex-direction: column;
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