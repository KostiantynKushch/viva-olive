<template>
  <div class="ba-geting-data">
    <div v-if="loading" class="ba-loading ba-container">
      <Preloader />
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <section
      v-if="menuSection"
      class="ba-menu"
      :style="[ $mq == 'laptop' || $mq == 'desktop' ? { backgroundImage: `url(${sectionBg})`} : {}]"
    >
      <div class="ba-container">
        <div class="ba-menu__inner">
          <h2 class="ba-section-title ba-menu__title">{{sectionTitle}}</h2>
          <!-- /.ba-section-title ba-menu__title -->
          <div class="ba-menu__wrap">
            <div class="ba-menu__categories ba-categories">
              <ul class="ba-categories__list">
                <li
                  v-for="category in filteredCategories"
                  :key="category.id"
                  class="ba-categories__item"
                >
                  <a
                    href="#"
                    @click.prevent="getCategory"
                    :id="category.id"
                    class="ba-categories__link"
                    :class="{'ba-categories__link--active' : activeCat == category.id}"
                  >{{category.name}}</a>
                </li>
                <!-- /.ba-categories__item -->
              </ul>
              <!-- /.ba-categories__list -->
            </div>
            <!-- /.ba-menu__categories -->
            <div class="ba-menu__list ba-list">
              <div class="ba-list__header">
                <h4 class="ba-list__column-name">Назва страви</h4>
                <h4 class="ba-list__column-weight">Вага</h4>
                <h4 class="ba-list__column-price">Ціна</h4>
                <mq-layout mq="tablet+">
                  <h4 class="ba-list__column-order">Замовити</h4>
                </mq-layout>
              </div>
              <!-- /.ba-list__header -->

              <div
                v-for="dish in filteredDishes"
                :key="dish.id"
                class="ba-list__product ba-product"
              >
                <div class="ba-product__info">
                  <h5 class="ba-product__name">{{dish.name}}</h5>
                  <span
                    v-if="dish.description != ''"
                    class="ba-product__description"
                  >( {{dish.description}} )</span>
                </div>

                <!-- /.ba-product__description -->
                <!-- /.ba-product__name -->
                <p class="ba-product__weight">{{dish.weight}}</p>
                <!-- /.ba-product__weight -->
                <p class="ba-product__price">{{dish.price}}</p>
                <!-- /.ba-product__price -->
                <div class="ba-product__order">
                  <h4 class="ba-list__column-order" v-if="$mq === 'mobile'">Замовити</h4>
                  <div class="ba-product__buttons">
                    <button
                      @click="removeProduct(dish.id)"
                      aria-label="reduce quantity"
                      class="ba-quantity ba-quantity--decr"
                    ></button>
                    <p class="ba-product__quantity">{{dish.quantity}}</p>
                    <!-- /.ba-product__quantity -->
                    <button
                      @click="addProduct(dish.id)"
                      aria-label="increase quantity"
                      class="ba-quantity ba-quantity--incr"
                    ></button>
                  </div>
                  <!-- /.ba-product__buttons -->
                </div>
                <!-- /.ba-product__order -->
              </div>
              <!-- /.ba-product -->
            </div>
            <!-- /.ba-menu__list ba-list -->
          </div>
          <!-- /.ba-menu__wrap -->
          <div class="ba-menu__add-to-cart">
            <a
              href="#"
              @click.prevent="proceedToCart"
              class="ba-menu__button ba-button"
              :class="{'ba-button--disabled' : cart.length == 0}"
            >Додати до кошика</a>
            <!-- /.ba-button ba-button--green -->
          </div>
          <!-- /.ba-menu__add-to-cart -->
        </div>
        <!-- /.ba-menu__inner -->
      </div>
      <!-- /.ba-container -->
    </section>
    <!-- /.ba-menu -->
  </div>
  <!-- /.ba-geting-data -->
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      loading: false,
      menuSection: null,
      error: null,
      sectionBg: "",
      activeCat: 1,
      sectionTitle: "",
      categories: {},
      categoryIDs: [],
      dishes: {},
      cart: [],
      order: [],
      quantityCounter: 0,
      totalQuantity: 0
    };
  },
  methods:  {
    clearMenu() {
      //  for adding new items to already not empty cart
      this.dishes.forEach(dish => {
        if (dish.quantity != 0) {
          dish.quantity = 0;
        }
      });
      this.cart = [];
    },
    totalQuantityUpdate(action) {
      //  to apdate counter and total quantity of added products in the cart
      switch (action) {
        case "+":
          this.quantityCounter++;
          break;
        case "-":
          this.quantityCounter--;
          break;
        case "push":
          this.totalQuantity = this.quantityCounter;
          EventBus.$emit("totalQuantity", this.totalQuantity);
          EventBus.$emit("order", this.order);
          break;
      }
    },
    proceedToCart() {
      //  transfer all data from cart to order
      this.cart.forEach(item => {
        this.dishes.forEach(dish => {
          if (dish.id == item.DishId) {
            let temp = {
              id: item.DishId,
              name: dish.name,
              quantity: item.quantity,
              price: dish.price
            };
            console.log('item');
            if(this.order.length == 0){
              this.order.push(temp);
            }else{
              let newItem = true;
              this.order.forEach(orderItem => {
                  if(orderItem.id == temp.id){
                    orderItem.quantity = orderItem.quantity + temp.quantity;
                    newItem = false;
                  }
              });
              if(newItem == true){
                this.order.push(temp);
              }
            }
          }
        });
      });
            this.totalQuantityUpdate("push");
            this.clearMenu();
      console.log(this.order);
    },
    frontDecrement(id) {
      this.dishes.forEach(element => {
        if (element.id == id) {
          element.quantity--;
          this.totalQuantityUpdate("-");
        }
      });
    },
    frontIncrement(id) {
      this.dishes.forEach(element => {
        if (element.id == id) {
          element.quantity++;
          this.totalQuantityUpdate("+");
        }
      });
    },
    addProduct(id) {
      let currentDish = { DishId: id, quantity: 1 };
      let newItem = true;
      if (this.cart.length == 0) {
        this.cart.push(currentDish);
        this.frontIncrement(id);
      } else {
        this.cart.forEach(cartItem => {
          if (cartItem.DishId == id) {
            cartItem.quantity++;
            newItem = false;
            this.frontIncrement(id);
          }
        });
        if (newItem == true) {
          this.cart.push(currentDish);
          this.frontIncrement(id);
        }
      }
    },
    removeProduct(id) {
      if (this.cart.length > 0) {
        this.cart.forEach(item => {
          if (item.DishId == id) {
            item.quantity--;
            this.frontDecrement(id);
          }
        });
        let updatedCart = this.cart.filter(function(value) {
          return value.quantity != 0;
        });
        this.cart = updatedCart;
      }
    },
    getCategory(event) {
      this.activeCat = event.target.id;
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      fetch("data/home-page.json")
        .then(result => result.json())
        .then(data => {
          if (data == null) {
            this.error = "Ooops, Nothing found!";
          } else {
            this.menuSection = data.menu;
            this.sectionTitle = this.menuSection.title;
            this.sectionBg = this.menuSection.background;
            this.titleBg = this.menuSection.titleBg;
            this.categories = this.menuSection.menu.categories;
            this.dishes = this.menuSection.menu.dishes;
          }
          this.loading = false;
        });
    },
    getCategoryIDs() {
      let ids = [];

      for (const property in this.dishes) {
        // dish id in dish object
        let item = this.dishes[property].categoryId;

        if (ids.length > 0) {
          //   check and add new id
          ids.forEach(element => {
            if (element != item) {
              ids.push(item);
            }
          });
        } else {
          //   push first id
          ids.push(item);
        }
      }
      // remove duplicates
      let result = [...new Set(ids)];

      return result;
    }
  },
  created() {
    this.fetchData();
  },

  computed: {
    filteredDishes() {
      let cat = this.activeCat;
      return this.dishes.filter(function(dish) {
        return dish.categoryId == cat;
      });
    },
    filteredCategories() {
      let currentCategories = this.getCategoryIDs();

      let filteredCategories = [];
      currentCategories.forEach(categoryId => {
        filteredCategories.push(
          this.categories.filter(function(categorie) {
            return categorie.id == categoryId;
          })
        );
      });
      let result = [];
      filteredCategories.forEach(array => {
        result = result.concat(array);
      });

      return result;
    }
  },
  components: {
    Preloader
  }
};
</script>

<style lang="scss">
.ba-loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ba-menu {
  padding: 100px 0;
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: 29%;
  min-height: 1450px;
  // .ba-menu__inner

  &__inner {
  }

  &__wrap {
    margin-bottom: 58px;
    @media screen and (min-width: 1024px) {
      width: 70%;
      margin-left: 30%;
      margin-bottom: 98px;
    }
  }

  // .ba-menu__title

  &__title {
    text-align: center;
    color: $background;
    position: relative;
    margin-bottom: 35px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 92px;
    }
    &:before {
      content: "";
      position: absolute;
      top: -80%;
      left: 0;
      right: 0;
      height: 72px;
      background: url("../../assets/img/section_bg_title_right.png") no-repeat
        center;
      background-color: transparent;
      background-size: contain;
      z-index: -1;
      @media screen and (min-width: 1440px) {
        top: -100%;

        height: 152px;
      }
    }
  }

  // .ba-menu__categories

  &__categories {
  }

  // .ba-menu__list

  &__list {
  }
  &__add-to-cart {
    color: $dark_gray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__button {
  }
}

.ba-section-title {
}
.ba-categories {
  // .ba-categories__list
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar-track {
    //  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border: 1.2px solid #e0e0e0;
    border-radius: 15px;
    background: $background;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background: $background;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    //  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d34606;
  }

  &__list {
    list-style: none;
    padding-left: 0;

    display: flex;
    align-items: center;
  }

  // .ba-categories__item

  &__item {
    white-space: nowrap;
  }
  &__item + &__item {
    margin-left: 35px;
  }
  // .ba-categories__link
  &__link {
    text-decoration: none;
    color: #000;
    @media screen and (min-width: 1440px) {
      font-size: 24px;
    }
    &:hover {
      color: $dark_olive;
    }

    &--active {
      font-weight: 700;
    }
  }
}

.ba-list {
  // .ba-list__header

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  // .ba-list__column-name

  &__column-name {
    width: 60%;
  }
  // .ba-list__column-weight

  &__column-weight {
    width: 20%;
  }

  // .ba-list__column-price

  &__column-price {
    width: 20%;
  }

  // .ba-list__column-order

  &__column-order {
  }

  // .ba-list__product

  &__product {
  }
}

.ba-product {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
  @media screen and (min-width: 640px) {
    flex-wrap: nowrap;
    font-size: 20px;
    margin-bottom: 52px;
  }
  // .ba-product__name

  &__name {
    margin: 0;
    text-transform: uppercase;
  }

  &__info {
    width: 60%;
    padding-right: 20px;
  }

  // .ba-product__weight

  &__weight {
    width: 20%;
  }

  // .ba-product__price

  &__price {
    width: 20%;
  }

  // .ba-product__order

  &__order {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 640px) {
      width: initial;
    }
  }

  // .ba-product__quantity

  &__quantity {
    font-size: 22px;
    margin: 0 12px;
  }

  // .ba-product__description

  &__description {
    font-size: 14px;
    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    @media screen and (min-width: 640px) {
      margin-bottom: 0;
    }
  }
}

.ba-quantity {
  border: none;
  width: 50px;
  height: 50px;
  outline: none;
  background-size: cover;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
  &--decr {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgB7ZmxThtBEEDHURo6NxRUXI+ELSgpOL4gRqKP/8BGQlCeUyFoEvEDQaIECadEFD4KEAUgGxCUPlcUFLhzeZnn3Ekn4uRMvLco0j3pZHNednd2ZmdnZkVycnJycnL+nYIYJAzDon5Ub25uSp1Op/z8/OwMBgPeydTUVH96ejpYWFgISqXSD33lFwqFQAxhRBAVwD06OvLOz8/dZrMp/X5fXNcVx3GkWBzKMXzXbrclCILh3/y+sbHhz83NfVGBfHlPVACnpeikQp1wuLW19fLw8NDS93V9ypGG4rZFBNanenp6eux5XqiChtVqNby9vT2mL3kPdODazs7OSyxAt9ttJCc+xv87+jT29va6CEQfLIDYpNfreWiB5+Li4ttbBHgNAl1dXe3TV6VSCXVBPLEBQpTL5bBWq4UmV5C+MDf6zlwYzIlVY0BsXQxDn/V6fajpzMwME8COMx3k1zh1xmD/ZeIA1HUesymvr6+/S8aw73Aivu+3xCS4TdwkHsaGm8R5JLTviinu7+9baAN3KZbAnaOVw8NDM1pBA2ij0eCYsHdoxVph80/i3pMdVtHGyclJUyyTsITJnQvhQ9RZVSyDAJjXOA7mQ1oDPXUdgj8lEPv4BJdE0mkNUwUhFNfTlq9tsU/AIjKHtIYf0xqQTxCKa6jdH/W7Br/h2dmZTMLy8rKsrKz8llIwpjoZiXOav5Gqkf+FVI2Q2T09PZFLFEdpZdRKmoIx19fXZWZmpp/WNlUjpKdRVueIfcpklcwhrWGqIPPz8x2Nefjqin0cFnFxcbEnk4Ivn52dDTmcxDKkxOOeYeNs9v3V1VU5ODgoGwkVxoRwSIsZFc4RxRcTELhxwhLIiSVUEA9tGLUEQmlC6qhAkLlW0AYpA8Gq0TAeSHLQyuXl5VfJGGIrtEGcJ6Zhlba3t22kurWE9h3JgjifjnKEz2IY+iTvocCReY2LDU/JJkq0TJaDaixQVA5qiA0YiFVDO9jzJCaA82DfxQU/m54xnkB9c3PzhU0ZFSW8twiEABT72As4kaj8Y7dkmpiMg2fBTSIQ5sZpzEkcFaxfF7E5VOsUumMB0AIecdKNbexa4fHx0dvd3XWjuGx4pUBClrxWIG7id96pacrS0pK/trZm5FrB9EWPox/u3d3dJ1LkURc9esnT1suejr7a/1OylpOTk5OTY5uf05KqWn7tko4AAAAASUVORK5CYII=");
  }

  &--incr {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPVSURBVHgB7Vk9SORAFH57XGPlNhZ26QU3aCUWxsb2VrAV01kmgmiZtRJFONFGqwtYKrjWChsLxUIl62+52crCwnSWufflEli8PSfR2ZGDfBCyO5m/772ZN++9ISpQoECBAgU+jhJJRBRFZX6Z19fXlWazqT8/P2uvr68oo76+vnBgYCAYGRkJKpXKERd5pVIpIEmQQoQJGAcHB87Z2ZlRr9cpDEMyDIM0TaNyOeYRl/m+T0EQxP/xfXFx0RsaGlphQh59JZiA1mDwpCKecLS8vPzy8PDQ4HKbHz3RUFq3DML8mMfHx4eO40RMNDJNM7q5uTlEX/QV4IGttbW1l5RAq9WqdU48Q3uNn9rW1lYLhNAHBEAq0W63HWgBz/n5+WYeAm8BQpeXly76qlarEQvEIRUACV3XI8uyIpkSRF9Ybui752SwnCA1DIi1TpKBPm3bjjXds2WGJYB13NNB/oxjYwzsv54YADadh9iUV1dXv/K0Y6MW4cnTBvsORsTzvAbJBMwmzCQsTF4p1Wq1CE+eNjAeHdo3SBbu7u4a0AbMJeXER4gAMOfQyv7+fiatfBNVgAY2NjagEfx1SRFYcJvz8/MhvIUs5l1IhGHwWqWxsbEjmb6RCDxWODs768PlYZii+kIit7e3P/Cempqqk2KwH3YEHw1OqKiukAifuhqcP0ZA6uHBuYQnLaooJAJXnE9b/PRJPQIIEXMQVfwuqoB4Aq441my37zgjTk9PRd3Qe5ZrYmKCJicn/wopMCa3ozSmeQ9ZNvt/AaFGENk9PT0hlih300o3SXYi1QS/cwdxGHNhYYEGBwdDUV2hRhCeJlGdRuqhI6rEHEQVhUSGh4ebOEcYBqmHBiGOjo62RRWFRLgTv7+/n+7v73+QYpycnMRjsjCFZ1iWze5OT0/T3t6e/plIMC/gGrF7UsU5wvBE9YVEsMHHx8e93d3dMqtZZUw957punGnJ4hplMr8zMzMrOBR3dnYsFVqBNra3t01oA+kikgkEOXCrLy4ufuZp95HACsEbwgakiUg2IKXV1VUVoa6FMZL0kEa9QBpPI0HAmCPJQJ84QJHg6HmOC5EbUjYYUHI6yIKAknRQjVQAA0Fq0A7W82eWAIwH9l2a8FNGomMC9tLS0gs2ZZKUcPIQAgEk+7AXYESS9I/alGnHZDRYFmRYQAjLDQlqJNqShPXbJDYOVRuJ7pQAtACL+NmNLe1a4fHx0VlfXzcSvyy+UsDZ03mtAL8J31HGS5Nw0OKMknGtIPuiR+OXgTgfIXK3ix6+5PH5sqfJRe6/grUCBQoUKFBANX4DVk2mRZoz0toAAAAASUVORK5CYII=");
  }
}
</style>