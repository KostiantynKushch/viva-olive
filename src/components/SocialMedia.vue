<template>
  <div class="ba-social">
    <a v-for="item in socialButtons" :key="item.key" :href="item.link" class="ba-social__link">
      <svg class="icon">
        <use :xlink:href="require('@/assets/icons/sprite.svg')+item.icon" />
      </svg>
    </a>
  </div>
  <!-- /.ba-social -->
</template>

<script>
export default {
  data() {
    return {
      socialButtons: [
        {
          key: 1,
          name: "call",
          link: "#",
          icon: "#call"
        },
        {
          key: 2,
          name: "instagram",
          link: "#",
          icon: "#instagram"
        },
        {
          key: 3,
          name: "vk",
          link: "#",
          icon: "#vk"
        },
        {
          key: 4,
          name: "twitter",
          link: "#",
          icon: "#twitter"
        },
        {
          key: 5,
          name: "facebook",
          link: "#",
          icon: "#facebook"
        },
        {
          key: 6,
          name: "ok",
          link: "#",
          icon: "#ok"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.ba-social {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 210px;
  margin-right: -30px;
  &__link {
    padding-right: 30px;
    margin-bottom: 26px;
    .icon {
      width: 40px;
      height: 40px;
    }
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>