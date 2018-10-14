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
}));
