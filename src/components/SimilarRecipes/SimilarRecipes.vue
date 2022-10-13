<template>
  <div class="similarRecipes">
    <RecipesList :recipesList="similarRecipes"></RecipesList>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RecipesList from "../../views/RecipesList/RecipesList.vue";
export default {
  name: "similarRecipes",
  props: ["idSimilarRecipes"],
  async created() {
    await this.similarRecipesRequest(this.idSimilarRecipes);
    console.log("similarRecipes", this.similarRecipes);
  },
  methods: {
    ...mapActions({
      similarRecipesRequest: "recipe/similarRecipesRequest",
    }),
  },
  computed: {
    ...mapState({
      similarRecipes: (state) => state.recipe.similarRecipes,
    }),
  },
  components: { RecipesList },
};
</script>

<style lang="scss" scoped>
@import "./scss/SimilarRecipes.scss";
</style>
