<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div
      class="container is-flex is-justify-content-space-between is-align-items-center"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item navbar-item title is-3" to="/"
          >Recipes</router-link
        >
      </div>
      <div class="navbar-brand">
        <div v-on:click="openSearch" class="navbar-item navbar-item title is-4">
          <img class="svg" src="@/assets/icon/search.svg" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      searchIsShow: false,
    };
  },
  methods: {
    ...mapActions("components", ["actionsIsSearchPanelShow"]),
    openSearch() {
      this.actionsIsSearchPanelShow(true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/colors.scss";
@import "./scss/header.scss";
</style>
