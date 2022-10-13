import axios from "axios";
import { urlGenerate } from "../utils.js";
export default {
  namespaced: true,
  state: {
    stepsRecipe: undefined,
  },
  actions: {
    async stepsRequest({ commit }, id) {
      try {
        console.log("stepsRequest", id);
        const path = urlGenerate(`${id}/analyzedInstructions`);
        const item = await axios(path);
        commit("setStepsRecipe", item?.data);
        console.log("stepsRequest = ", item?.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    setStepsRecipe(state, data) {
      if (data) {
        state.stepsRecipe = data[0].steps.map((item) => {
          return { ...item, isDone: false };
        });
        console.log(state.stepsRecipe);
      }
    },
    setIsDone(state, data) {
      state.stepsRecipe.forEach((item) => {
        if (item.number === data.id) {
          item.isDone = data.isDone;
        }
      });

      console.log(state.stepsRecipe);
    },
  },
  getters: {
    stepsRecipe(state) {
      return state.stepsRecipe;
    },
  },
};
