export default {
  state: {
    aa: 1,
    bb: 2,
    cc: 3,
  },
  getters: {},
  mutations: {
    setaa(state, payload) {
      state.aa = payload;
    },
    setbb(state, payload) {
      state.bb = payload;
    }
  },
  actions: {
  },
}

