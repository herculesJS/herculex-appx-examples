import Store from 'herculex';
import api, { servicesCreactor } from 'herculex-appx-plugin-api';
import * as services from '../../services/api';

export default new Store({
  state: {},
  getters: {
    item: state => state.getIn(['$result', 'fetchGitHubFeeds', 'value'], ''),
    itemLoading: state => state.getIn(['$loading', 'fetchGitHubFeeds', 'isLoading'], '')
  },
  plugins: [  
    'logger',
    api({
      logger: true,
      API_ROOT: 'https://api.github.com'
    })
  ],
  services: servicesCreactor(services),
  methods: {
    onIncrement() {
      this.dispatch('handleIncrement');
    }
  },
  actions: {
    async pageOnLoad({ dispatch, getters }) {
      const a = await dispatch('$service:fetchGitHubFeeds');
      console.log('a', getters.getIn('item'));
    },
    handleIncrement() {
      console.log(11111)      
    },
  },
});
