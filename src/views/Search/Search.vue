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
      <div
        v-if="isList"
        class="container container-list is-widescreen container-filters-list is-flex"
      >
        <filters @onClickSearch="onStartSearch"></filters>
        <div class="list">
          <recipes-list :recipesList="searhResult"></recipes-list>
        </div>
      </div>
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
import Filters from "../../components/Filters/Filters.vue";
export default {
  name: "Searh",
  async created() {
    this.$watch(
      () => this.$route.params,
      async (toParams) => {
        try {
          this.searchText = toParams.query;
          if (this.searchText) {
            await this.startSearch(this.searchText);
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
    this.searchText = this.$route.params.query;
    if (this.searchText) {
      this.isLoad = true;
      await this.startSearch(this.searchText);
      this.isLoad = false;
    }
  },
  beforeUnmount() {
    this.resetStateSearch();
  },
  data() {
    return {
      searchText: "",
      titleSerch: "",
      titleImg: "collage.jpg",
      isLoad: true,
    };
  },
  computed: {
    isList() {
      return !!this.searhResult.length;
    },
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
    async onStartSearch(query) {
      const querySearch = `${this.searchText}&${query}`;
      console.log(querySearch);
      await this.startSearch(querySearch);
    },
    async startSearch(query) {
      console.log("startSearch", query);
      await this.searchByQuery(query);

      if (!this.isRecipesFound) {
        this.titleSerch = `Not found for your request: ${query}`;
      } else {
        this.titleSerch = this.searchText;
      }
    },
  },
  components: { RecipesList, Loader, Filters },
};
</script>

<style lang="scss">
@import "@/style/colors.scss";
@import "./scss/Search.scss";
</style>
