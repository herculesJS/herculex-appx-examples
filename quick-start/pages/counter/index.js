import store from './store';

Page(store.register({
  onLoad(options) {
    // this.dispatch('getBankList');
    console.log('demo onLoad, options: ', options);
  },
  onReady() {
    console.log('demo onReady');
  },
  onShow() {
    console.log('demo onShow');
  },
  onHide() {
    console.log('demo onHide');
  },
  onUnload() {
    console.log('demo onUnload');
  },

  onIncrement() {
    this.commit('INCREMENT');
  },
  onDecrement() {
    this.commit('DECREMENT');
  },
  incrementIfOdd() {
    if (this.state.value % 2 !== 0) {
      this.onIncrement()
    }
  },
  incrementAsync() {
    this.dispatch('incrementAsync');
  }
}));
