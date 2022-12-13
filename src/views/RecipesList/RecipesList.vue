<template>
  <div v-if="isList" class="recipesList">
    <Tile v-for="item in recipesList" :key="item.id" :recipe="item"></Tile>
  </div>
</template>

<script>
import Tile from "@/components/Tiles/RecipeTile/RecipeTile.vue";
export default {
  name: "RecipesList",
  props: {
    recipesList: {
      type: Array,
    },
  },
  computed: {
    isList() {
      return !!this.recipesList.length;
    },
  },
  components: { Tile },
};
</script>

<style lang="scss">
@import "./scss/RecipesList.scss";
</style>
