<template>
  <div v-if="!isLoad" class="search">
    <div class="is-flex is-flex-direction-column is-align-items-baseline">
      <div class="search-img-box">
        <div
          class="img"
          v-bind:style="{
            backgroundImage: getUrlImage,
          }"
        ></div>
        <div class="title">{{ titleSerch }}</div>
      </div>
      <div class="search-text">
        <div
          class="container is-flex is-justify-content-space-between is-align-items-baseline"
        >
          <div class="title is-4">Found recipes: {{ searhTotalResults }}</div>
        </div>
      </div>
      <recipes-list :recipesList="searhResult"></recipes-list>
    </div>
  </div>
  <div v-else>
    <loader></loader>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getPathImage } from "../../utils.js";
import RecipesList from "../RecipesList/RecipesList.vue";
import Loader from "../../components/Loader/Loader.vue";
export default {
  name: "Searh",
  data() {
    return {
      titleSerch: "",
      titleImg: "collage.jpg",
      isLoad: true,
    };
  },
  async created() {
    this.$watch(
      () => this.$route.params,
      async (toParams) => {
        try {
          const query = toParams.query;
          if (query) {
            await this.startSearch(query);
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
    const query = this.$route.params.query;
    if (query) {
      this.isLoad = true;
      await this.startSearch(query);
      this.isLoad = false;
    }
  },

  beforeUnmount() {
    this.resetStateSearch();
  },
  computed: {
    getUrlImage() {
      return `url(${getPathImage(`mealType/${this.titleImg}`)})`;
    },
    isRecipesFound() {
      return !!this.searhTotalResults;
    },
    ...mapState({
      searhResult: (state) => state.search.searhResult,
      searhCount: (state) => state.search.count,
      searhOffset: (state) => state.search.offset,
      searhTotalResults: (state) => state.search.totalResults,
    }),
  },
  methods: {
    ...mapActions("search", [
      "searchByMealTypes",
      "searchByQuery",
      "resetStateSearch",
    ]),
    async startSearch(query) {
      console.log("startSearch", query);
      await this.searchByQuery(query);

      if (!this.isRecipesFound) {
        this.titleSerch = `Not found for your request: ${query}`;
      } else {
        this.titleSerch = query;
      }
    },
  },
  components: { RecipesList, Loader },
};
</script>

<style lang="scss">
@import "@/style/colors.scss";
@import "./scss/Search.scss";
</style>
