<template>
  <div class="ba-social">
    <svg class="icon">
      <use xlink:href="@/assets/icons/sprite.svg#instagram" />
    </svg>
    <a v-for="item in socialButtons" :key="item.key" :href="item.link">
      {{item.name}}
      <svg class="icon">
        <use :xlink:href="item.icon" />
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
          icon: "@/assets/icons/sprite.svg#call"
        },
        {
          key: 2,
          name: "instagram",
          link: "#",
          icon: "@/assets/icons/sprite.svg#instagram"
        },
        {
          key: 3,
          name: "vk",
          link: "#",
          icon: "@/assets/icons/sprite.svg#vk"
        },
        {
          key: 4,
          name: "twitter",
          link: "#",
          icon: "@/assets/icons/sprite.svg#twitter"
        },
        {
          key: 5,
          name: "facebook",
          link: "#",
          icon: "@/assets/icons/sprite.svg#facebook"
        },
        {
          key: 6,
          name: "ok",
          link: "#",
          icon: "@/assets/icons/sprite.svg#ok"
        }
      ]
    };
  }
};
</script>

<style>
</style>