<template>
  <div class="itemTile">
    <router-link
      class="is-flex is-justify-content-center"
      :to="{ name: 'recipe', params: { id: recipe.id } }"
    >
      <div class="img-box">
        <div
          class="img"
          v-bind:style="{ backgroundImage: `url(${recipe.image})` }"
        ></div>
        <div class="gray-bg">
          <div class="svg icon-eye"></div>
        </div>
      </div>
    </router-link>
    <router-link
      class="is-flex is-justify-content-center"
      :to="{ name: 'recipe', params: { id: recipe.id } }"
    >
      <h4 class="title is-5">
        {{ recipe.title }}
      </h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tile",
  data: () => {
    return {
      theRecipe: {},
    };
  },
  props: ["recipe"],
  created() {},
  watch: {
    props(newValue) {
      if (this.newValue && !this.newValue.image) {
        const tempRecipe = { ...this.newValue };
        tempRecipe.newValue = `https://spoonacular.com/recipeImages/${this.recipe.id}-556x370.jpg`;
      }
      this.theRecipe = newValue;
    },
  },
};
</script>
