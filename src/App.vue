<template>
  <main>
    <Navbar />
    <RouterView></RouterView>
  </main>
</template>
<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Holaa",
    };
  },
  components: {
    Navbar,
  },
};
</script>
<style></style>
