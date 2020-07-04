<template>
  <header class="ba-header">
    <div class="ba-container">
      <div class="ba-header__inner">
        <div class="ba-row">
          <div class="ba-col-medium-5 ba-col-small-4 ba-header__left-part">
            <button
              @click="toggleMenu"
              :class="{isActive}"
              aria-label="Show Menu"
              class="ba-hamburger"
            >
              <div class="ba-hamburger__line"></div>
            </button>
            <!-- /.ba-hamburger -->
            <nav class="ba-header__nav ba-nav">
              <ul class="ba-nav__list">
                <li class="ba-nav__item">
                  <a href="#" class="ba-nav__link">Головна</a>
                </li>
                <!-- /.ba-nav__item -->
                <li class="ba-nav__item">
                  <a href="#" class="ba-nav__link">Меню</a>
                </li>
                <!-- /.ba-nav__item -->
                <li class="ba-nav__item">
                  <a href="#" class="ba-nav__link">Фотогалерея</a>
                </li>
                <!-- /.ba-nav__item -->
                <li class="ba-nav__item">
                  <a href="#" class="ba-nav__link">Новини</a>
                </li>
                <!-- /.ba-nav__item -->
              </ul>
              <!-- /.ba-nav__list -->
            </nav>
            <!-- /.ba-header__nav -->
          </div>
          <!-- /.ba-col-5 ba-header__left-part -->
          <div class="ba-col-medium-2 ba-col-small-4 ba-logo ba-header__logo">
            <a href="#" class="ba-logo__link">
              <img alt="Logo" src="@/assets/logo.png" />
            </a>
          </div>
          <!-- /.ba-col-2 ba-logo ba-header__logo -->
          <div class="ba-col-medium-5 ba-col-small-4 ba-header__right-part">
            <nav class="ba-header__nav ba-nav">
              <ul class="ba-nav__list">
                <li class="ba-nav__item">
                  <a href="#" class="ba-nav__link">Контакти</a>
                </li>
                <!-- /.ba-nav__item -->
              </ul>
              <!-- /.ba-nav__list -->
            </nav>
            <!-- /.ba-header__nav -->
            <div class="ba-header__cart ba-cart">
              <svg class="icon">
                <use xlink:href="@/assets/icons/sprite.svg#cart_icon" />
              </svg>
              <p class="ba-cart__cuantity">(2)</p>
            </div>
            <!-- /.ba-header__cart ba-cart -->
            <div class="ba-header__location ba-location">
              <svg class="icon">
                <use xlink:href="@/assets/icons/sprite.svg#location" />
              </svg>
              <select name="locations" class="locations">
                <option value="poltava">Полтава</option>
                <option value="poltava">Кременчук</option>
                <option value="poltava">Суми</option>
              </select>
            </div>
            <!-- /.ba-header__location ba-location -->
          </div>
          <!-- /.ba-col-5 ba-header__right-part -->
        </div>
        <!-- /.ba-row -->
        <div class="ba-header__mob-part" :class="{isActive}">
          <nav class="ba-header__mob-nav ba-mob-nav">
            <ul class="ba-mob-nav__list">
              <li class="ba-mob-nav__item">
                <a href="#" class="ba-mob-nav__link">Головна</a>
              </li>
              <!-- /.ba-mob-nav__item -->
              <li class="ba-mob-nav__item">
                <a href="#" class="ba-mob-nav__link">Меню</a>
              </li>
              <!-- /.ba-mob-nav__item -->
              <li class="ba-mob-nav__item">
                <a href="#" class="ba-mob-nav__link">Фотогалерея</a>
              </li>
              <!-- /.ba-mob-nav__item -->
              <li class="ba-mob-nav__item">
                <a href="#" class="ba-mob-nav__link">Новини</a>
              </li>
              <!-- /.ba-mob-nav__item -->
              <li class="ba-mob-nav__item">
                <a href="#" class="ba-mob-nav__link">Контакти</a>
              </li>
              <!-- /.ba-mob-nav__item -->
            </ul>
            <!-- /.ba-mob-nav__list -->
          </nav>
          <!-- /.ba-header__nav -->
          <div class="ba-header__location ba-location">
            <svg class="icon">
              <use xlink:href="@/assets/icons/sprite.svg#location" />
            </svg>
            <select name="locations" class="locations">
              <option value="poltava">Полтава</option>
              <option value="poltava">Кременчук</option>
              <option value="poltava">Суми</option>
            </select>
          </div>
          <!-- /.ba-header__location ba-location -->
        </div>
        <!-- /.ba-header__mob-part -->
      </div>
      <!-- /.ba-header__inner -->
    </div>
    <!-- /.ba-container -->
  </header>
  <!-- /.ba-header -->
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.ba-hamburger {
  @media screen and (min-width: 1440px) {
    display: none;
  }
}

.ba-location {
  display: flex;
  align-items: center;
  .icon {
    width: 17.5px;
    height: 25px;
  }
  .locations {
    cursor: pointer;
    background: none;
    border: none;
    margin-left: 14px;
    padding: 0;
    width: 120px;
    &:hover {
      color: $dark_gray;
    }
  }
}

.ba-header {
  // .ba-header__inner
  position: relative;
  background: $light_olive;

  &__inner {
  }

  // .ba-header__left-part

  &__left-part {
    display: flex;
    align-items: center;
  }

  // .ba-header__nav

  &__nav {
  }

  // .ba-header__logo

  &__logo {
  }

  // .ba-header__right-part

  &__right-part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .ba-nav {
      width: 20%;
    }
    @media screen and (min-width: 1440px) {
      justify-content: space-between;
    }
  }

  // .ba-header__cart

  &__cart {
  }

  // .ba-header__location

  &__location {
    display: none;
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }

  // .ba-header__mob-nav

  &__mob-part {
    background: $background;

    @media screen and (min-width: 1440px) {
      display: none;
    }

    .ba-location {
      display: initial;
      @media screen and (min-width: 1440px) {
        display: none;
      }
    }

    &.isActive {
    }
  }
  &__mob-nav {
  }
}
.ba-container {
}
.ba-row {
}
.ba-col-5 {
}
.ba-hamburger {
  // .ba-hamburger__line
  background: transparent;
  border: none;
  outline: none;
  width: 50px;
  height: 30px;

  &__line {
    width: 40px;
    height: 4px;
    background: $for_light_bg;
    border-radius: 5px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      width: 40px;
      height: 4px;
      background: $for_light_bg;
      border-radius: 5px;
    }
    &:after {
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 40px;
      height: 4px;
      background: $for_light_bg;
      border-radius: 5px;
    }
  }
  &.isActive {
  }
}
.ba-nav {
  display: none;
  @media screen and (min-width: 1440px) {
    display: initial;
    width: 100%;
  }

  // .ba-nav__list

  &__list {
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .ba-nav__item

  &__item {
  }

  // .ba-nav__link

  &__link {
    text-decoration: none;
    color: $for_light_bg;
    &:hover {
      color: $dark_gray;
    }
  }
}

.ba-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 88px;
  }
}
.ba-cart {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__cuantity {
    margin: 0;
    line-height: 1;
    padding: 5px 0 0;
    font-size: 12px;
    @media screen and (min-width: 1440px) {
      padding: 10px 0 0 10px;
      font-size: 20px;
    }
  }
  .icon {
    width: 25px;
    height: 28.44px;
  }
  @media screen and (min-width: 1440px) {
    .icon {
      width: 35px;
      height: 48.44px;
    }
  }
}

.ba-mob-nav {
  // .ba-mob-nav__list

  &__list {
  }

  // .ba-mob-nav__item

  &__item {
  }

  // .ba-mob-nav__link

  &__link {
  }
}
</style>