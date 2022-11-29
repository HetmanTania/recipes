<template>
  <div
    class="itemTile is-flex is-flex-direction-column is-justify-content-space-between"
  >
    <router-link :to="{ name: 'recipe', params: { id: theRecipe.id } }">
      <div class="img-box">
        <div
          class="img"
          v-bind:style="{ backgroundImage: `url(${theRecipe.image})` }"
        ></div>
        <div class="gray-bg">
          <div class="svg icon-eye"></div>
        </div>
      </div>
    </router-link>
    <div class="itemTile-info">
      <h5 v-if="theRecipe.dishType" class="title is-5">
        {{ theRecipe.dishType }}
      </h5>
      <router-link :to="{ name: 'recipe', params: { id: theRecipe.id } }">
        <h4 class="title is-4">
          {{ theRecipe.title }}
        </h4>
      </router-link>
      <h5 class="desc" v-html="getDescription"></h5>
      <mini-info-recipe
        :servings="theRecipe.servings"
        :readyInMinutes="theRecipe.readyInMinutes"
      ></mini-info-recipe>
    </div>
  </div>
</template>

<script>
import MiniInfoRecipe from "../../MiniInfoRecipe/MiniInfoRecipe.vue";
import { getMiniDescription } from "../../../utils.js";
export default {
  name: "Tile",
  data: function () {
    return {
      theRecipe: {},
    };
  },
  props: {
    recipe: {
      type: Object,
    },
  },
  computed: {
    getDescription() {
      return getMiniDescription(this.theRecipe.summary);
    },
  },
  watch: {
    recipe: {
      handler(propValue) {
        const tempRecipe = { ...propValue };
        if (propValue) {
          if (!propValue.image) {
            console.log("image!!!");
            tempRecipe.image = `https://spoonacular.com/recipeImages/${this.recipe.id}-556x370.jpg`;
          }
          tempRecipe.dishType = propValue.dishTypes
            ? propValue.dishTypes[0]
            : "";
          tempRecipe.readyInMinutes = propValue.readyInMinutes
            ? propValue.readyInMinutes
            : 0;
          this.theRecipe = { ...tempRecipe };
        } else {
          console.log("Error: TileRecipe");
          this.theRecipe = {};
        }
      },
      immediate: true,
    },
  },
  components: { MiniInfoRecipe },
};
</script>
