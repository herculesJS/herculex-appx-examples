import Store from 'herculex';

export default new Store({
  connectGlobal: true,
  state: {
    value: 0,
  },
  getters: {
  },
  plugins: [
    'logger',
  ],
  mutations: {
    INCREMENT(state) {
      ++state.value
    },
    DECREMENT(state) {
      --state.value
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(function() {
        commit('INCREMENT');
      }, 1000);
    }
  },
});
