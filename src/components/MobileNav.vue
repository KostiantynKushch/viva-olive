<template>
  <div class="ba-mobnav">
    <nav class="ba-mobnav__navigation">
      <ul class="ba-mobnav__list">
        <li v-for="item in links" :key="item.key" class="ba-mobnav__item">
          <router-link :to="item.link" class="ba-mobnav__link">{{item.title}}</router-link>
        </li>
        <!-- /.ba-mobnav__item -->
      </ul>
      <!-- /.ba-mobnav__list -->
    </nav>
    <div class="ba-mobnav__location">
      <SelectLoc />
    </div>
    <!-- /.ba-mobnav__location -->
    <div class="ba-mobnav__social">
      <SocialMedia />
    </div>
    <!-- /.ba-mobnav__social -->
  </div>
  <!-- /.ba-mobnav -->
</template>

<script>
import SelectLoc from "@/components/SelectLoc.vue";
import SocialMedia from "@/components/SocialMedia.vue";
export default {
  data() {
    return {
      links: [
        {
          key: 1,
          link: "/",
          title: "Головна"
        },
        {
          key: 2,
          link: "/menu",
          title: "Меню"
        },
        {
          key: 3,
          link: "/gallery",
          title: "Фотогалерея"
        },
        {
          key: 4,
          link: "/news",
          title: "Новини"
        },
        {
          key: 5,
          link: "/contact",
          title: "Контакти"
        }
      ]
    };
  },
  methods: {},
  components: {
    SelectLoc,
    SocialMedia
  }
};
</script>

<style lang="scss" scoped >
@import "@/assets/scss/_variables.scss";

.ba-mobnav {
  position: absolute;
  background: $background;
  top: 100%;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding-right: 30px;
  // .ba-mobnav__list

  &__list {
    text-align: right;
    list-style: none;
    padding-left: 0;
    margin: 0 0 76px;
  }

  // .ba-mobnav__item

  &__item {
    padding-top: 36px;
  }

  // .ba-mobnav__link

  &__link {
    text-decoration: none;
    color: $for_light_bg;
    font-size: 20px;
    line-height: 1;
    &:hover {
      color: $light_olive;
    }
    &.router-link-exact-active {
      font-weight: 700;
    }
  }
  // .ba-mobnav__location

  &__location {
    margin-bottom: 66px;
  }
  &__social {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>