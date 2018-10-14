import { connect } from 'herculex';

const withStore = connect({
  data: {
    value: ''
  },
  mapStateToProps: {
    active: (state, _, props) => {
      return props.getIn('filter') === state.getIn('visibilityFilter');
    }
  },
  props: {
    filter: ""
  },
  methods: {
    onTapFilter() {
      console.log('setVisibilityFilter');
      this.commit('setVisibilityFilter', this.props.filter);
    }
  }
});

Component(withStore());