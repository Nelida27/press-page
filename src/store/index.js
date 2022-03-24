import { createStore } from "vuex";
import DataService from "@/services/DataService";

const state = {
  users: [],
};

const mutations = {
  getUsers(state, users) {
    state.users = users;
  },
  removeUser(state, user) {
    const index = state.users.findIndex((el) => el.id === user.id);
    const usersData = [...state.users];
    if (index > -1) usersData.splice(index, 1);
    state.users = usersData;
  },
};

const getters = {
  getUsers: (state) => state.users.splice(0, 10),
};
const actions = {
  async getUsers({ commit }) {
    try {
      await DataService.getAllUsers().then((response) => {
        commit("getUsers", response.data != null ? response.data : []);
      });
    } catch (err) {
      //
    }
  },

  removeUser({ commit }, user) {
    commit("removeUser", user);
  },
};

export default createStore({
  state,
  mutations,
  getters,
  actions,
});
