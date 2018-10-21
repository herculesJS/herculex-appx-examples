import Store from 'herculex';
import { VisibilityFilters } from '../../constants';

let nextTodoId = 0

export default new Store({
  connectGlobal: true,
  state: {
    cardDetail: {
      id:123,
      xxInfo: {
        detail: {
          name: 'xxx'
        }
      }
    },
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
  },
  getters: {
    counts: state => state.getIn('todos').length,
    cardDetailName: state => state.getIn(['cardDetail', 'xxInfo', 'detail', 'name'], ''),
  },
  plugins: [
    'logger',
  ],
  mutations: {
    setVisibilityFilter(state, payload) {
      state.visibilityFilter = payload;
    },
    addToDo(state, payload) {
      state.todos.push({
        id: nextTodoId++,
        text: payload,
        completed: false
      });
    },
    toggleTodo(state, payload) {
      state.todos.forEach(todo => {
        if (todo.id === payload) {
          todo.completed = !todo.completed
        }
      });
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
