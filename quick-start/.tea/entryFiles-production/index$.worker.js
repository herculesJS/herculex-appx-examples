
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../components/whitespace/index');
require('../../components/wingblank/index');
require('../../modules/add-todo/index');
require('../../modules/visible-todo-list/index');
require('../../modules/todo-filter-link/index');
require('../../components/todo-footer/index');
require('../../pages/counter/index');
require('../../pages/todos/index');
require('../../pages/api/index');
require('../../pages/test/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
