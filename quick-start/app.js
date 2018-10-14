import Store from './store';
App(Store({
  onLaunch(options) {
  },
  onShow(options) {
    console.log('app onShowApp', options);
  },
  onHide() {
    console.log('app onHide');
  },
  onError(msg) {
    console.log('app OnError: ', msg);
  },
  globalData: {
  },
}));
