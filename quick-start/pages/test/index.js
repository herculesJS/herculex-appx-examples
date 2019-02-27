import Store from 'herculex';

const store = new Store({
  connectGlobal: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: ['logger']
});

Page(store.register({
  data: {
    pageQuery: {},
    query: '',
    list: [1, 2, 3, 4, 5].map(v => ({ url: `/pages/test/index?id=${v}` })),
  },
  onLoad(query) {
    this.setData({
      pageQuery: query,
    })
  },
  onShow() {
    console.log('222', this.data.pageQuery);
    this.setData({
      query: this.data.pageQuery.id
    })
  },

  jump(e) {
    const url = e.target.dataset.url
    my.navigateTo({ url })
  },
}));