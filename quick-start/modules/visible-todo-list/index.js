import { connect } from 'herculex';

import { VisibilityFilters } from '../../constants';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const withStore = connect({
  mapStateToProps: {
    todos: state => getVisibleTodos(state.getIn('todos'), state.getIn('visibilityFilter')),
  },
  methods: {
    toggleTodo(payload) {
      const id = payload.getIn(['target', 'dataset', 'todo-id'], 0);
      this.commit('toggleTodo', id);
    }
  }
});

Component(withStore());