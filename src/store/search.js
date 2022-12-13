import axios from "axios";
import { urlGenerate } from "../utils.js";

export default {
  namespaced: true,
  state: {
    searhResult: [],
    count: 0,
    offset: 0,
    totalResults: 0,
  },
  mutations: {
    setSearhResult(state, date) {
      state.searhResult = date;
    },
    setCount(state, date) {
      state.count = date;
    },
    setOffset(state, date) {
      state.offset = date;
    },
    setTotalResults(state, date) {
      state.totalResults = date;
    },
  },
  actions: {
    async searchByMealTypes({ commit }, type) {
      const path = urlGenerate("complexSearch", `type=${type}&number=15`);
      const items = await axios(path);
      // const items = {
      //   data: {
      //     results: [
      //       {
      //         id: 715594,
      //         title: 'Homemade Garlic and Basil French Fries',
      //         image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 715497,
      //         title: 'Berry Banana Breakfast Smoothie',
      //         image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 644387,
      //         title: 'Garlicky Kale',
      //         image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 716268,
      //         title: 'African Chicken Peanut Stew',
      //         image: 'https://spoonacular.com/recipeImages/716268-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 716381,
      //         title: 'Nigerian Snail Stew',
      //         image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 782601,
      //         title: 'Red Kidney Bean Jambalaya',
      //         image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 794349,
      //         title: 'Broccoli and Chickpea Rice Salad',
      //         image: 'https://spoonacular.com/recipeImages/794349-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 715446,
      //         title: 'Slow Cooker Beef Stew',
      //         image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 715415,
      //         title: 'Red Lentil Soup with Chicken and Turnips',
      //         image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 766453,
      //         title: 'Hummus and Za'atar',
      //         image: 'https://spoonacular.com/recipeImages/766453-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 716627,
      //         title: 'Easy Homemade Rice and Beans',
      //         image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 716408,
      //         title: 'Greek-Style Baked Fish: Fresh, Simple, and Delicious',
      //         image: 'https://spoonacular.com/recipeImages/716408-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 795751,
      //         title: 'Chicken Fajita Stuffed Bell Pepper',
      //         image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 640941,
      //         title: 'Crunchy Brussels Sprouts Side Dish',
      //         image: 'https://spoonacular.com/recipeImages/640941-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //       {
      //         id: 798400,
      //         title:
      //           'Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant',
      //         image: 'https://spoonacular.com/recipeImages/798400-312x231.jpg',
      //         imageType: 'jpg',
      //       },
      //     ],
      //     offset: 0,
      //     number: 16,
      //     totalResults: 5219,
      //   },
      // };
      console.log(items);
      commit("setSearhResult", items.data.results);
      commit("setCount", items.data.number);
      commit("setOffset", items.data.offset);
      commit("setTotalResults", items.data.totalResults);
    },

    async searchByQuery({ commit }, query) {
      console.log("searchByQuery", query);
      const path = urlGenerate("complexSearch", `query=${query}`);
      const items = await axios(path);
      console.log(items);
      commit("setSearhResult", items.data.results);
      commit("setCount", items.data.number);
      commit("setOffset", items.data.offset);
      commit("setTotalResults", items.data.totalResults);
    },

    resetStateSearch({ commit }) {
      console.log("resetStateSearch");
      commit("setSearhResult", []);
      commit("setCount", 0);
      commit("setOffset", 0);
      commit("setTotalResults", 0);
    },
  },
};
