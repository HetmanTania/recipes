<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-flex is-align-items-baseline">
      <div class="navbar-brand">
        <router-link class="navbar-item navbar-item title is-3" to="/"
          >Recipes</router-link
        >
      </div>
      <div class="navbar-brand">
        <router-link class="navbar-item navbar-item title is-4" to="/"
          >Home</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    test() {
      // console.log("sdsd");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/header.scss";
</style>
