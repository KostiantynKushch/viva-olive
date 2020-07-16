<template>
<div class="ba-order">
    <div v-for="item in order" :key="item.id" class="ba-order__item ba-item">
        <p class="ba-item__name">{{item.name}}</p>
        <!-- /.ba-order__item-name -->
        <div class="ba-item__quantity">
                    <button
                      @click="removeProduct(item.id)"
                      aria-label="reduce quantity"
                      class="ba-quantity ba-quantity--decr"
                    ></button>
                    <p class="ba-product__quantity">{{item.quantity}}</p>
                    <!-- /.ba-product__quantity -->
                    <button
                      @click="addProduct(item.id)"
                      aria-label="increase quantity"
                      class="ba-quantity ba-quantity--incr"
                    ></button>
                  </div>
                  <!-- /.ba-item__quantity -->
        <p class="ba-item__price">{{item.price}}</p>
        <!-- /.ba-item__price -->
        <button @click.prevent="removeItem" class="ba-close-btn ba-item__remove">X</button> <!-- /.ba-close-btn ba-item__remove -->
    </div>
    <!-- /.ba-order__item ba-item -->
</div>
<!-- /.ba-order -->
</template>

<script>

export default {
    props:{
        order: {
            type: Array
        }
    },
data() {
    return {
    };
  },
  methods:{
      removeItem(){
          console.log('removed');
          
      },
      removeProduct(id){
        console.log('removed prod');
        console.log(id);

      },
      addProduct(id){
        console.log('added prod');
        console.log(id);

      }
  }
}
</script>

<style lang="scss">

.ba-order{
    width: 100%;
}

.ba-item{
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__quantity{
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