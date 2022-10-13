<template>
  <div class="search">
    <div class="is-flex is-flex-direction-column is-align-items-baseline">
      <div class="search-img-box">
        <div
          class="img"
          v-bind:style="{
            backgroundImage: `url('../src/assets/mealType/${titleImg}')`,
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
import mealTypes from "../../constants.js";
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
      const id = this.$route.params.id;
      this.titleSerch = mealTypes.find((el) => el.id === id).title;
      this.titleImg = mealTypes.find((el) => el.id === id).image;
      await this.searchByMealTypes(this.titleSerch);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapState({
      searhResult: (state) => state.search.searhResult,
      searhCount: (state) => state.search.count,
      searhOffset: (state) => state.search.offset,
      searhTotalResults: (state) => state.search.totalResults,
    }),
  },
  methods: {
    ...mapActions("search", ["searchByMealTypes"]),
  },
  components: { RecipesList },
};
</script>

<style lang="scss">
@import "@/style/colors.scss";
@import "./scss/Search.scss";
</style>
