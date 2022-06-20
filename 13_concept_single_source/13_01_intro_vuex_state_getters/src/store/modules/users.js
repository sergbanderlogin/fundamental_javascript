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
  mutations: {},
  actions: {},
};

export default usersStore;
