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
  async created() {
    await this.similarRecipesRequest(this.idSimilarRecipes);
  },
  props: {
    idSimilarRecipes: {
      type: Number,
    },
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
