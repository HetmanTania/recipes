<template>
  <div class="dox-search">
    <div class="search is-flex is-justify-content-flex-end">
      <div class="level-item" @click.self="closeSerch">
        <div class="field has-addons">
          <p class="control is-flex is-align-content-center">
            <input
              v-model.trim="query"
              class="input"
              id="searchItem"
              type="text"
              placeholder="Find a recipe"
            />
            <button class="button" @click="startSearch">Search</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions("components", ["actionsIsSearchPanelShow"]),
    ...mapActions("search", ["searchByQuery"]),
    closeSerch() {
      this.actionsIsSearchPanelShow(false);
    },
    startSearch() {
      this.$router.push({ name: "search", params: { query: this.query } });
      // this.searchByQuery(this.query);
    },
  },
  created() {
    console.log("created search");
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/search.scss";
</style>
