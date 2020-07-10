<template>
  <header class="ba-header">
    <div class="ba-container">
      <div class="ba-header__inner">
        <div class="ba-wrap-res ba-wrap-res--mobile" v-if="$mq === 'mobile' || $mq === 'tablet'">
          <div class="ba-row ba-vertical-align">
            <div class="ba-col-medium-2 ba-col-small-4 ba-logo ba-header__logo ba-logo">
              <router-link to="/" class="ba-logo__link">
                <img alt="Logo" src="@/assets/logo.png" class="ba-logo__img" />
              </router-link>
            </div>

            <div class="ba-col-small-8 ba-col-medium-10">
              <div class="ba-header__right-part">
                <MobileMenu :links="navLinks.links" />
              </div>
              <!-- /.ba-header__right-part -->
            </div>
            <!-- /.ba-col-smaall-4 ba-col-medium-5 -->
          </div>
          <!-- /.ba-row -->
        </div>
        <!-- /.ba-wrap-res -->
        <div v-else class="ba-wrap-res ba-wrap-res--desk">
          <div class="ba-row">
            <div class="ba-col-5 ba-vertical-align">
              <HeaderDeskNav :links="navLinks.links" />
            </div>
            <!-- /.ba-col-5 -->
            <div class="ba-col-2 ba-vertical-align">
              <router-link to="/" class="ba-logo__link">
                <img alt="Logo" src="@/assets/logo.png" class="ba-logo__img" />
              </router-link>
            </div>
            <!-- /.ba-col-2 -->
            <div class="ba-col-5 ba-vertical-align">
              <div class="ba-header__desk-right">
                <div class="ba-wrap-single">
                  <HeaderDeskNav :links="navLinks.links" :lastItem="lastItem" />
                </div>
                <!-- /.ba-wrap -->
                <HeaderCartButton />
                <SelectLoc />
              </div>
              <!-- /.ba-header__right-part -->
            </div>
            <!-- /.ba-col-5 -->
          </div>
          <!-- /.ba-row -->
        </div>
        <!-- /.ba-wrap-res ba-wrap-res--desk -->
      </div>
      <!-- /.ba-header__inner -->
    </div>
    <!-- /.ba-container -->
  </header>
  <!-- /.ba-header -->
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";
import HeaderDeskNav from "@/components/HeaderDeskNav.vue";
import HeaderCartButton from "@/components/HeaderCartButton.vue";
import SelectLoc from "@/components/SelectLoc.vue";
export default {
  props: {
    navLinks: {
      type: Object
    }
  },
  data() {
    return {
      lastItem: true
    };
  },
  components: {
    MobileMenu,
    HeaderDeskNav,
    SelectLoc,
    HeaderCartButton
  }
};
</script>

<style lang="scss" >
.ba-vertical-align {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ba-header {
  background: $light_olive;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  &__inner {
    padding: 5px 0;
  }
  &__right-part {
    text-align: right;
  }
  // .ba-header__logo

  &__logo {
  }
  &__desk-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

.ba-logo {
  // .ba-logo__link

  &__link {
    display: flex;
    align-items: center;
    &:hover {
      opacity: 0.7;
    }
  }

  // .ba-logo__img

  &__img {
    object-fit: contain;
    max-width: 88px;
    @media screen and (min-width: 1024px) {
      max-width: 145px;
    }
  }
}

.ba-wrap-single {
  width: 24%;
}
</style>