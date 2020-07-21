<template>
  <div class="ba-confirmation">
    <form @submit.prevent="sendData" class="ba-confirmation__form ba-form">
      <div class="ba-form__contact">
        <p class="ba-subtitle ba-subtitle--accent ba-form__title">Контактна інформація</p>
        <div class="ba-form__field">
          <label for="name" class="ba-form__label">Ім’я</label>
          <input
            type="text"
            id="name"
            v-model="name"
            @change="getData"
            class="ba-form__input"
            placeholder="Ім’я"
            required
          />
        </div>
        <!-- /.ba-form__field -->
        <div class="ba-form__field">
          <label for="phone" class="ba-form__label">Телефон</label>
          <input
            type="tel"
            id="phone"
            v-model="phone"
            @change="getData"
            class="ba-form__input"
            placeholder="0 (хх) хх хх ххх"
            required
          />
        </div>
      </div>
      <!-- /.ba-form__contact -->

      <div class="ba-form__options">
        <div class="ba-form__radio ba-radio">
          <input
            id="delivery_1"
            type="radio"
            name="delivery"
            value="Самовивіз"
            v-model="delivery"
            @change="getData"
            class="ba-radio__input"
          />
          <label for="delivery_1" class="ba-radio__label">Самовивіз</label>
        </div>
        <!-- /.ba-form__radio -->
        <div class="ba-form__radio ba-radio">
          <input
            id="delivery_2"
            type="radio"
            name="delivery"
            value="Доставка"
            v-model="delivery"
            @change="getData"
            class="ba-radio__input"
          />
          <label for="delivery_2" class="ba-radio__label">Доставка</label>
        </div>
      </div>
      <!-- /.ba-form__options ba-form__delivery -->
      <transition name="bounce">
        <div class="ba-form__delivery" v-if="delivery == 'Доставка'">
          <p class="ba-subtitle ba-subtitle--accent ba-form__title">Адреса доставки</p>

          <div class="ba-form__field">
            <label for="city">Місто</label>
            <select name="city" class="locations ba-form__input" v-model="city" @change="getData">
              <option
                v-for="location in locations"
                :key="location.key"
                :value="location.name"
              >{{location.name}}</option>
            </select>
          </div>
          <div class="ba-form__field">
            <label for="street" class="ba-form__label">Вулиця</label>
            <input
              type="text"
              v-model="street"
              @change="getData"
              class="ba-form__input"
              placeholder="Вулиця"
            />
          </div>
          <div class="ba-form__field">
            <label for="houseNumber" class="ba-form__label">Номер будинку</label>
            <input
              type="text"
              v-model="houseNumber"
              @change="getData"
              class="ba-form__input"
              placeholder="Номер будинку"
            />
          </div>
          <div class="ba-form__field">
            <label for="houseBuilding" class="ba-form__label">Корпус</label>
            <input
              type="text"
              v-model="houseBuilding"
              @change="getData"
              class="ba-form__input"
              placeholder="Корпус"
            />
          </div>
          <div class="ba-form__field">
            <label for="doorCode" class="ba-form__label">Дверний код</label>
            <input
              type="text"
              v-model="doorCode"
              @change="getData"
              class="ba-form__input"
              placeholder="Дверний код"
            />
          </div>
          <div class="ba-form__field">
            <label for="apartment" class="ba-form__label">Квартира</label>
            <input
              type="text"
              v-model="apartment"
              @change="getData"
              class="ba-form__input"
              placeholder="Квартира"
            />
          </div>
          <div class="ba-form__field">
            <label for="entrance" class="ba-form__label">Під’їзд</label>
            <input
              type="text"
              v-model="entrance"
              @change="getData"
              class="ba-form__input"
              placeholder="Під’їзд"
            />
          </div>
          <div class="ba-form__field">
            <label for="floor" class="ba-form__label">Поверх</label>
            <input
              type="text"
              v-model="floor"
              @change="getData"
              class="ba-form__input"
              placeholder="Поверх"
            />
          </div>
          <div class="ba-form__field">
            <label for="getIn" class="ba-form__label">Доставити в</label>
            <input
              type="text"
              v-model="getIn"
              @change="getData"
              class="ba-form__input"
              placeholder="15:30"
            />
          </div>
        </div>
        <!-- /.ba-form__delivery -->
      </transition>

      <p class="ba-subtitle ba-subtitle--accent ba-form__title">Спосіб оплати</p>
      <div class="ba-form__options">
        <div class="ba-form__radio ba-radio">
          <input
            type="radio"
            name="payment"
            id="paymentMethod_1"
            value="Готівка"
            v-model="paymentMethod"
            @change="getData"
            class="ba-radio__input"
          />
          <label for="paymentMethod_1" class="ba-radio__label">Готівка</label>
        </div>

        <div class="ba-form__radio ba-radio">
          <input
            type="radio"
            name="payment"
            id="paymentMethod_2"
            value="Карткою"
            v-model="paymentMethod"
            @change="getData"
            class="ba-radio__input"
          />
          <label for="paymentMethod_2" class="ba-radio__label">Карткою</label>
        </div>
      </div>
      <!-- /.ba-form__options ba-form__payment -->

      <p class="ba-confirmation__total">
        До сплати:
        <b>{{ `${total} грн.`}}</b>
      </p>
      <input type="submit" class="ba-button ba-button--small ba-button--olive" value="Підтвердити" />
    </form>
    <!-- /.ba-confirmation__form -->
    <!-- <a href="#" class="ba-button ba-button--small ba-button--olive">Підтвердити</a> -->
  </div>
  <!-- /.ba-confirmation -->
</template>

<script>
export default {
  props: {
    total: {
      type: Number
    }
  },
  data() {
    return {
      name: "",
      phone: "",
      delivery: "Самовивіз",
      city: "Полтава",
      street: "",
      houseNumber: "",
      houseBuilding: "",
      doorCode: "",
      apartment: "",
      entrance: "",
      floor: "",
      getIn: "",
      paymentMethod: "Готівка",
      data: []
    };
  },
  methods: {
    getData() {
      let data = [
        { name: this.name },
        { phone: this.phone },
        { total: this.total },
        { delivery: this.delivery }
      ];
      if (this.delivery == "Доставка") {
        data.push(
          { city: this.city },
          { street: this.street },
          { houseNumber: this.houseNumber },
          { houseBuilding: this.houseBuilding },
          { doorCode: this.doorCode },
          { apartment: this.apartment },
          { entrance: this.entrance },
          { floor: this.floor },
          { getIn: this.getIn }
        );
      }

      this.data = data;
    },
    sendData() {
      console.log(this.data);
    }
  },
  created() {
    fetch("data/locations.json")
      .then(result => result.json())
      .then(data => {
        this.locations = data.locations;
      });
  }
};
</script>

<style lang="scss">
.ba-form {
  &__field {
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__label,
  &__input {
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
  &__label {
  }
  &__input {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    padding: 0 20px 0;
    &::placeholder {
      color: #e0e0e0;
    }
    &:focus {
      border-color: $dark_olive;
    }
  }
  &__contact {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .ba-form__field {
      grid-column: 1/2;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: 50px;
    }
  }
  &__options {
    margin-bottom: 40px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 70px;
      display: flex;
      align-items: center;
    }
  }
  &__delivery {
    margin-bottom: 40px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 70px;
    }
  }
}

.ba-radio {
  &__label {
    cursor: pointer;
    padding: 0 30px 0 0;

    &:before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 4px solid $light_olive;
      border-radius: 50%;
      background: $light_olive;
      margin-right: 30px;
      @media screen and (min-width: 1024px) {
        margin-right: 50px;
      }
    }

    input:checked + &:before {
      background: #fff;
    }
  }
  &__input {
    display: none;
  }
}
</style>