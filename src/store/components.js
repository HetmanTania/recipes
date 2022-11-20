export default {
  namespaced: true,
  state: {
    isSearchPanelShow: false,
  },
  mutations: {
    setIsSearchPanelShow(state, value) {
      state.isSearchPanelShow = value;
    },
  },
  actions: {
    actionsIsSearchPanelShow({ commit }, value) {
      commit("setIsSearchPanelShow", value);
    },
  },
};
