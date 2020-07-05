<template>
  <header class="ba-header">
    <div class="ba-container">
      <div class="ba-header__inner">
        <div class="ba-row ba-vertical-align">
          <div class="ba-col-medium-2 ba-col-small-4 ba-logo ba-header__logo">
            <router-link to="/" class="ba-logo__link">
              <img alt="Logo" src="@/assets/logo.png" />
            </router-link>
          </div>
          <div class="ba-col-small-4 ba-col-medium-5"></div>
          <!-- /.ba-col-smaall-4 ba-col-medium-5 -->
          <div class="ba-col-small-4 ba-col-medium-5">
            <div class="ba-header__right-part">
              <MobileMenu v-if="$mq === 'mobile'" />
              <p v-else>Desctop Nav</p>
            </div>
            <!-- /.ba-header__right-part -->
          </div>
          <!-- /.ba-col-smaall-4 ba-col-medium-5 -->
        </div>
        <!-- /.ba-row -->
      </div>
      <!-- /.ba-header__inner -->
    </div>
    <!-- /.ba-container -->
  </header>
  <!-- /.ba-header -->
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";
export default {
  data() {
    return {
      isActive: false
    };
  },
  components: {
    MobileMenu
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.ba-vertical-align {
  align-items: center;
}
.ba-header {
  background: $light_olive;
  position: relative;
  &__right-part {
    text-align: right;
  }
}
</style>