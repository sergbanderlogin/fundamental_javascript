import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: "Sergey",
        age: 58,
      },
    },
  },
  getters: {
    usersList: ({ list }) => Object.values(list),
  },
  mutations: {
    ADD_USER(state, user) {
      Vue.set(state.list, user.id, user);
    },
  },
  actions: {
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      commit("ADD_USER", newUser);
    },
  },
};

export default usersStore;
