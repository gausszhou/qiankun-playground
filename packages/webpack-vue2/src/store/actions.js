import Cookies from "js-cookie";
export default {
  setLanguage({ commit }, payload) {
    Cookies.set("language", payload);
    commit("setLanguage", payload);
  }
};
