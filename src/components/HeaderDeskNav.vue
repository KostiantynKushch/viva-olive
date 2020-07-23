<template>
  <nav class="ba-desk-nav__navigation">
    <ul v-if="lastItem" class="ba-desk-nav__list">
      <li v-for="item in links.slice(-1)" :key="item.key" class="ba-desk-nav__item">
        <router-link :to="item.link" class="ba-desk-nav__link">{{item.title}}</router-link>
      </li>
      <!-- /.ba-desk-nav__item -->
    </ul>
    <!-- /.ba-desk-nav__list -->
    <ul v-else class="ba-desk-nav__list">
      <li v-for="item in links.slice(0, -1)" :key="item.key" class="ba-desk-nav__item">
        <router-link :to="item.link" class="ba-desk-nav__link">{{item.title}}</router-link>
      </li>
      <!-- /.ba-desk-nav__item -->
    </ul>
    <!-- /.ba-desk-nav__list -->
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
    },
    lastItem: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.ba-desk-nav {
  // .ba-desk-nav__navigation

  &__navigation {
    width: 100%;
  }

  // .ba-desk-nav__list

  &__list {
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .ba-desk-nav__item

  &__item {
  }

  // .ba-desk-nav__link

  &__link {
    text-decoration: none;
    color: $for_light_bg;
    font-size: 20px;
    line-height: 1;
    &:hover {
      color: $dark_olive;
    }
    &.router-link-exact-active {
      font-weight: 700;
    }
  }
}
</style>