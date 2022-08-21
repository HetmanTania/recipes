<template>
  <div v-if="theRecipe" class="recipe">
    <div
      class="panels is-flex is-align-items-flex-start is-justify-content-center"
    >
      <div class="block">
        <div class="single-panels">
          <div
            class="main-img"
            v-bind:style="{ backgroundImage: `url(${theRecipe.image})` }"
          ></div>
          <ingredients :extendedIngredients="getIngredients"></ingredients>
        </div>
        <div class="single-panels">
          <nutritional :nutritionalList="nutritionalInfo"></nutritional>
        </div>
        <similar-recipes :idSimilarRecipes="theRecipe.id"></similar-recipes>
      </div>
      <div class="block">
        <div class="single-panels">
          <div class="title is-1">{{ theRecipe.title }}</div>
          <div
            class="features-couisine-clock is-flex is-align-items-center is-justify-content-space-between"
          >
            <div class="features-block is-flex is-align-items-center">
              <div>FEATURES:</div>
              <img
                v-if="theRecipe.vegetarian"
                title="Vegan"
                src="https://img.icons8.com/external-soft-fill-juicy-fish/30/000000/external-vegan-plant-based-diet-soft-fill-soft-fill-juicy-fish-20.png"
              />
              <img
                v-if="theRecipe.glutenFree"
                title="Gluten Free"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/000000/external-gluten-free-cbd-oil-flaticons-flat-flat-icons.png"
              />
              <img
                v-if="theRecipe.dairyFree"
                title="Dairy Free"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/30/000000/external-dairy-free-vegan-and-vegetarian-flaticons-lineal-color-flat-icons-2.png"
              />
            </div>
          </div>
          <mini-info-recipe
            :readyInMinutes="theRecipe.readyInMinutes"
            :servings="theRecipe.servings"
          ></mini-info-recipe>
          <div class="description">
            <div
              class="titleDescription is-flex is-align-items-flex-self-end is-justify-content-start"
            >
              <img
                src="https://img.icons8.com/wired/34/000000/ingredients-list.png"
              />
              <div class="title is-4">Description</div>
            </div>
            <div v-html="theRecipe.summary" class="description"></div>
          </div>
          <Steps :id="theRecipe.id"></Steps>
        </div>
      </div>
    </div>
  </div>
  <div else>NOT RECIPE</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MiniInfoRecipe from "@/components/MiniInfoRecipe/MiniInfoRecipe.vue";
import Ingredients from "@/components/Ingredients/Ingredients.vue";
import Nutritional from "@/components/Nutritional/Nutritional.vue";
import Steps from "../../components/Steps/Steps.vue";
import SimilarRecipes from "@/components/SimilarRecipes/SimilarRecipes.vue";
import { transformationDescription } from "../../utils";

export default {
  name: "Recipe",
  async created() {
    const id = this.$route.params.id;
    await this.recipeRequest(id);
    await this.nutritionRequest(id);
    this.theRecipe.summary = transformationDescription(this.theRecipe.summary);
  },
  methods: {
    ...mapActions({
      recipeRequest: "recipe/recipeRequest",
      nutritionRequest: "nutritionRequest",
    }),
  },
  computed: {
    ...mapState({
      theRecipe: (state) => state.recipe.theRecipe,
      nutritionalInfo: (state) => state.nutritionalInfo,
    }),
    getIngredients() {
      return this.theRecipe.extendedIngredients.map((item) => {
        return { id: item.id, name: item.original };
      });
    },
  },
  components: {
    Steps,
    MiniInfoRecipe,
    Ingredients,
    Nutritional,
    SimilarRecipes,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/colors.scss";
@import "./scss/Recipe.scss";
</style>
