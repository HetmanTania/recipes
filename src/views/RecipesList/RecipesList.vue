<template>
  <!-- //is-flex is-flex-wrap-wrap is-justify-content-center -->
  <div class="recipesList">
    <recipeTile
      v-for="item in recipesList"
      :key="item.id"
      :recipe="item"
    ></recipeTile>
  </div>
</template>

<script>
import RecipeTile from "@/components/Tiles/RecipeTile/RecipeTile.vue";
export default {
  name: "RecipesList",
  props: ["recipesList"],
  components: { RecipeTile },
};
</script>

<style lang="scss">
@import "./scss/RecipesList.scss";
</style>
