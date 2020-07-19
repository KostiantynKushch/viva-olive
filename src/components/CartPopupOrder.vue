<template>
  <div class="ba-order">
    <div v-for="item in order" :key="item.id" class="ba-order__item ba-item">
      <p class="ba-item__name">{{item.name}}</p>
      <!-- /.ba-order__item-name -->
      <div class="ba-item__buttons">
        <button
          @click="reduceQuantity(item)"
          aria-label="reduce quantity"
          class="ba-quantity ba-quantity--decr"
        ></button>
        <p class="ba-item__quantity">{{item.quantity}}</p>
        <!-- /.ba-product__quantity -->
        <button
          @click="increaseQuantity(item)"
          aria-label="increase quantity"
          class="ba-quantity ba-quantity--incr"
        ></button>
      </div>
      <!-- /.ba-item__quantity -->
      <p class="ba-item__price">{{`${item.price} грн`}}</p>
      <!-- /.ba-item__price -->
      <button @click.prevent="removeItem(item)" class="ba-close-btn ba-item__remove"></button>
      <!-- /.ba-close-btn ba-item__remove -->
    </div>
    <!-- /.ba-order__item ba-item -->
  </div>
  <!-- /.ba-order -->
</template>

<script>
export default {
  props: {
    order: Array
  },
  data() {
    return {};
  },
  methods: {
    removeItem(item) {
      this.$emit("removedItem", item);
    },
    reduceQuantity(item) {
      this.$emit("reducedQuantity", item);
    },
    increaseQuantity(item) {
      this.$emit("increasedQuantity", item);
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.ba-order {
  width: 100%;
}

.ba-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 2fr 1fr 1fr;
  }

  &__name {
    grid-column: 1/4;
    @media screen and (min-width: 768px) {
      grid-column: 1/2;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__quantity {
    margin: 0;
  }

  &__price {
    @media screen and (min-width: 768px) {
      text-align: center;
    }
  }
  &__remove {
    margin: 0 auto;
  }
}
</style>