<template>
  <div id="app">
    <Menu :menu="menu"></Menu>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      menu: [
        {
          title:this.$t("menu.about"),
          path: "/",
        },
        {
          title:this.$t("menu.experience"),
          path: "/experience",
        },
        {
          title:this.$t("menu.education"),
          path: "/education",
        },
        {
          title:this.$t("menu.skills"),
          path: "/skills",
        },
        {
          title:this.$t("menu.download-cv"),
          pdf:"cv.pdf"
        },
         {
          title:this.$t("menu.contact"),
          path: "/contact",
        },
        {
          title:this.$t("menu.reaact-version"),
          link:"http://gabrielcarnez.com.ar/react-cv/"
        },
        {
          title:this.$t("menu.show-code"),
          link:"https://github.com/gabrielcarnez/cv-vue"
        },
      ],
    };
  },
};
</script>
