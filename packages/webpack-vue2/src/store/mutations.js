export default {
  increment(state, payload) {
    state.rootCount += payload;
  },
  changeState(state, payload) {
    state.testObj = payload;
  },
  inctest(state) {
    state.test++;
  },
  changeFlag(state, payload) {
    state.flagObject.flag = payload;
  },
  setLanguage(state, payload) {
    state.language = payload;
  }
};
