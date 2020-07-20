<template>
  <div class="ba-confirmation">
    <form action="#" class="ba-confirmation__form ba-form">
      <p class="ba-subtitle ba-subtitle--accent ba-form__title">Контактна інформація</p>
      <label for="name">Ім’я</label>
      <input type="text" id="name" v-model="name" @change="sendData" />
      <label for="phone">Телефон</label>
      <input type="text" id="phone" v-model="phone" @change="sendData" />

      <div class="ba-form__options ba-form__delivery">
        <input
          type="radio"
          name="delivery"
          id="1"
          value="Самовивіз"
          v-model="delivery"
          @change="sendData"
        />
        <label for="1">Самовивіз</label>
        <input
          type="radio"
          name="delivery"
          id="2"
          value="Доставка"
          v-model="delivery"
          @change="sendData"
        />
        <label for="2">Доставка</label>
      </div>
      <!-- /.ba-form__options ba-form__delivery -->
      <transition name="bounce">
        <div class="ba-form__delivery" v-if="delivery == 'Доставка'">
          <p class="ba-subtitle ba-subtitle--accent ba-form__title">Адреса доставки</p>

          <label for="city">Місто</label>
          <select name="city" class="locations" v-model="city" @change="sendData">
            <option
              v-for="location in locations"
              :key="location.key"
              :value="location.name"
            >{{location.name}}</option>
          </select>

          <label for="street">Вулиця</label>
          <input type="text" v-model="street" @change="sendData" />
          <label for="houseNumber">Номер будинку</label>
          <input type="text" v-model="houseNumber" @change="sendData" />
          <label for="houseBuilding">Корпус</label>
          <input type="text" v-model="houseBuilding" @change="sendData" />
          <label for="doorCode">Дверний код</label>
          <input type="text" v-model="doorCode" @change="sendData" />
          <label for="apartment">Квартира</label>
          <input type="text" v-model="apartment" @change="sendData" />
          <label for="entrance">Під’їзд</label>
          <input type="text" v-model="entrance" @change="sendData" />
          <label for="floor">Поверх</label>
          <input type="text" v-model="floor" @change="sendData" />
          <label for="getIn">Доставити в</label>
          <input type="text" v-model="getIn" @change="sendData" />
        </div>
        <!-- /.ba-form__delivery -->
      </transition>

      <div class="ba-form__options ba-form__payment">
        <input
          type="radio"
          name="payment"
          id="3"
          value="Готівка"
          v-model="paymentMethod"
          @change="sendData"
        />
        <label for="3">Готівка</label>
        <input
          type="radio"
          name="payment"
          id="4"
          value="Карткою"
          v-model="paymentMethod"
          @change="sendData"
        />
        <label for="4">Карткою</label>
      </div>
      <!-- /.ba-form__options ba-form__payment -->

      <p class="ba-confirmation__total">
        До сплати:
        <b>{{ `${total} грн.`}}</b>
      </p>
      <input
        type="submit"
        class="ba-button ba-button--small ba-button--olive"
        value="Підтвердити"
        @click.prevent="sendData"
      />
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
      paymentMethod: "Готівка"
    };
  },
  methods: {
    sendData() {
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
      console.log(this.total);
      console.log(data);
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

<style>
</style>