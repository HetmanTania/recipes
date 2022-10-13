import axios from "axios";
import { urlGenerate } from "../utils.js";
import { createStore } from "vuex";
import step from "./step.js";
import recipe from "./recipe.js";
import search from "./search.js";

export default createStore({
  state: {
    nutritionalInfo: undefined,
  },
  mutations: {
    setNutritionalInfo(state, data) {
      state.nutritionalInfo = data;
    },
  },
  actions: {
    async nutritionRequest({ commit }, id) {
      try {
        const path = urlGenerate(`${id}/nutritionWidget.json`);
        const item = await axios(path);
        commit("setNutritionalInfo", item.data);
        console.log("setNutritionalInfo = ", item.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    nutritionalInfo(state) {
      return state.nutritionalInfo;
    },
  },
  modules: {
    step,
    recipe,
    search,
  },
});
