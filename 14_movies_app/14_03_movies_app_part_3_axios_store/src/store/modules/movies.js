import axios from "axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      // tt1285016
      const response = await axios.get("/", {
        params: {
          is: "tt1265016",
        },
      });
      console.log(response);
    },
  },
};

export default moviesStore;
