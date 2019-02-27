import Store from 'herculex';
import * as services from '../../services/counter';

export default new Store({
  connectGlobal: true,
  state: {
    value: 0,
  },
  getters: {
  },
  plugins: [
    // 'logger',
  ],
  mutations: {
    INCREMENT(state) {
      ++state.value
    },
    DECREMENT(state) {
      --state.value
    },
    REQUEST_ADD(state, { value }) {
      state.value += value;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(function() {
        commit('INCREMENT');
      }, 1000);
    },
    async incrementRequest({ commit }) {
      const value = await services.addNumber().catch(console.log);
      console.log('vvvv234234', value);
      commit('REQUEST_ADD', { value });
    }
  },
});
