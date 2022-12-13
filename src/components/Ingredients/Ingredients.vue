<template>
  <div class="ingredients widget">
    <div
      class="title-widget is-flex is-align-items-center is-justify-content-center"
    >
      <img src="https://img.icons8.com/wired/32/000000/list--v1.png" />
      <div class="title is-3">Ingredients</div>
    </div>

    <table class="ingredients-table">
      <tbody>
        <tr v-for="ingredient in ingredients" :key="ingredient.id">
          <td>
            <input
              v-model="ingredient.isDone"
              :name="ingredient.id"
              :id="ingredient.id"
              type="checkbox"
            />
            <label :for="ingredient.id"></label>
          </td>
          <td class="ingredientName" :class="[ingredient.isDone ? 'done' : '']">
            {{ ingredient.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  props: {
    extendedIngredients: {
      type: Array,
    },
  },
  data() {
    return {
      ingredients: this.extendedIngredients,
    };
  },
  watch: {
    extendedIngredients(newValue) {
      const tempIngredients = newValue.map((el) => {
        return { ...el, isDone: false };
      });
      this.ingredients = tempIngredients;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/colors.scss";
@import "./scss/Ingredients.scss";
</style>
