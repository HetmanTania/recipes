<template>
  <div class="search">
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
          <div>Found recipes: {{ searhTotalResults }}</div>
        </div>
      </div>
      <recipes-list :recipesList="searhResult"></recipes-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getPathImage } from "../../utils.js";
// import mealTypes from "../../constants.js";
import RecipesList from "../RecipesList/RecipesList.vue";

export default {
  name: "Searh",
  data() {
    return {
      titleSerch: "",
      titleImg: "collage.jpg",
    };
  },
  async created() {
    try {
      const query = this.$route.params.query;
      console.log("created", query);
      // this.titleSerch = mealTypes.find((el) => el.id === id).title;
      // this.titleImg = mealTypes.find((el) => el.id === id).image;
      await this.searchByQuery(query);
    } catch (err) {
      console.log(err);
    }
  },
  // beforeUnmount() {
  //   this.resetStateSearch();
  // },
  computed: {
    getUrlImage() {
      return `url(${getPathImage(`mealType/${this.titleImg}`)})`;
    },
    ...mapState({
      searhResult: (state) => state.search.searhResult,
      searhCount: (state) => state.search.count,
      searhOffset: (state) => state.search.offset,
      searhTotalResults: (state) => state.search.totalResults,
    }),
  },
  methods: {
    // ...mapMutations('searh', ['resetStateSearch']),
    ...mapActions("search", ["searchByMealTypes", "searchByQuery"]),
  },
  components: { RecipesList },
};
</script>

<style lang="scss">
@import "@/style/colors.scss";
@import "./scss/Search.scss";
</style>
