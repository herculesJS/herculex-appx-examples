import { connect } from 'herculex';

const withStore = connect({
  data: {
    value: ''
  },
  methods: {
    clear() {
      this.setData({
        value: ''
      });
    },
    onInput(e) {
      this.setData({
        value: e.detail.value
      });
    },
    addToDo(payload) {
      if (!this.data.value) {
        return;
      }
      this.commit('addToDo', this.data.value);
      this.clear();
    }
  }
});

Component(withStore());