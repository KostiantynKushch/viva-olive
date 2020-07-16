<template>
  <div class="ba-order">
    <div v-for="item in order" :key="item.id" class="ba-order__item ba-item">
      <p class="ba-item__name">{{item.name}}</p>
      <!-- /.ba-order__item-name -->
      <div class="ba-item__quantity">
        <button
          @click="reduceQuantity(item)"
          aria-label="reduce quantity"
          class="ba-quantity ba-quantity--decr"
        ></button>
        <p class="ba-product__quantity">{{item.quantity}}</p>
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
      <button @click.prevent="removeItem(item)" class="ba-close-btn ba-item__remove">X</button>
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

<style lang="scss">
.ba-order {
  width: 100%;
}

.ba-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    @media screen and (min-width: 640px) {
      margin-bottom: 0;
    }
  }
}
</style>