import axios from "axios";
import { urlGenerate } from "../utils.js";

export default {
  namespaced: true,
  state: {
    theRecipe: undefined,
    randomRecipes: [],
    similarRecipes: [],
  },
  mutations: {
    setTheRecipe(state, date) {
      state.theRecipe = date;
    },
    setRandomRecipes(state, date) {
      state.randomRecipes = date;
    },
    setSimilarRecipes(state, data) {
      state.similarRecipes = data;
    },
  },
  actions: {
    async similarRecipesRequest({ commit }, id) {
      try {
        const path = urlGenerate(`${id}/similar`, "number=4");
        const items = await axios(path);
        commit("setSimilarRecipes", items.data);
        console.log("similarRecipe = ", items.data);
      } catch (e) {
        console.log(e);
      }
    },
    async randomRecipesRequest({ commit }) {
      try {
        const path = urlGenerate("random", "number=10");
        const items = await axios(path);
        commit("setRandomRecipes", items.data.recipes);
        console.log("randomRecipes = ", items.data.recipes);
      } catch (e) {
        console.log(e);
      }
    },
    async recipeRequest({ commit }, id) {
      try {
        console.log(id);
        const path = urlGenerate(`${id}/information`);
        const item = await axios(path);
        commit("setTheRecipe", item.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    randomRecipes(state) {
      return state.randomRecipes;
    },
    theRecipe(state) {
      return state.theRecipe;
    },
  },
};
