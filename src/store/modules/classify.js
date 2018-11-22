export default {
  state: {
    pageNo: 1,
    pageSize: 400,
    type: 1,
  },
  getters: {},
  mutations: {
    setType: (state, payload) => {
      state.type = payload;
    },
    setPageNo: (state, payload) => {
      state.pageNo = payload;
    }
  },
  actions: {
    setTypeA:({commit},payload)=>{
      setTimeout(() => {
        commit('setType',`${payload}aaaaaa`);
      }, 2000);
    }

  },
}
