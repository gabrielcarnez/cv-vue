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
          title: "About",
          path: "/",
        },
        {
          title: "experience",
          path: "/experience",
        },
        {
          title: "education",
          path: "/education",
        },
        {
          title: "skills",
          path: "/skills",
        },
      ],
    };
  },
};
</script>
