import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homes: [
      {
        id: 1,
        title: "House 1",
        img: require("@/assets/img/house-1.jpeg"),
        location: "Usa",
        rooms: 5,
        square: "325",
        price: "$120.00"
      },
      {
        id: 2,
        title: "House 2",
        img: require("@/assets/img/house-2.jpeg"),
        location: "Usa",
        rooms: 5,
        square: "325",
        price: "$120.00"
      },
      {
        id: 3,
        title: "House 3",
        img: require("@/assets/img/house-3.jpeg"),
        location: "Usa",
        rooms: 5,
        square: "325",
        price: "$120.00"
      },
      {
        id: 4,
        title: "House 4",
        img: require("@/assets/img/house-4.jpeg"),
        location: "Usa",
        rooms: 5,
        square: "325",
        price: "$120.00"
      },
      {
        id: 5,
        title: "House 5",
        img: require("@/assets/img/house-5.jpeg"),
        location: "Usa",
        rooms: 5,
        square: "325",
        price: "$120.00"
      },
      {
        id: 6,
        title: "House 6",
        location: "Usa",
        img: require("@/assets/img/house-6.jpeg"),
        rooms: 5,
        square: "325",
        price: "$120.00"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getHomes: state => {
      return state.homes;
    }
  },
  modules: {}
});
