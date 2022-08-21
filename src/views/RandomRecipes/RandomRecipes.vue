<template>
  <div
    class="randomRecipes is-flex is-flex-wrap-wrap is-justify-content-center"
  >
    <Tile v-for="item in randomRecipes" :key="item.id" :recipe="item"></Tile>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Tile from "@/components/Tiles/RecipeTile/RecipeTile.vue";

export default {
  async mounted() {
    await this.randomRecipesRequest();
  },
  computed: mapState("recipe", ["randomRecipes"]),
  methods: {
    ...mapActions("recipe", ["randomRecipesRequest"]),
  },
  components: { Tile },
};
</script>
