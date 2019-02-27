
require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');
function success() {
require('../..//app.js?appxworker=1');
require('../../node_modules/mini-antui/es/list/index.js?appxworker=1');
require('../../node_modules/mini-antui/es/list/list-item/index.js?appxworker=1');
require('../../components/whitespace/index.js?appxworker=1');
require('../../components/wingblank/index.js?appxworker=1');
require('../../modules/add-todo/index.js?appxworker=1');
require('../../modules/visible-todo-list/index.js?appxworker=1');
require('../../modules/todo-filter-link/index.js?appxworker=1');
require('../../components/todo-footer/index.js?appxworker=1');
require('../../pages/counter/index.js?appxworker=1');
require('../../pages/todos/index.js?appxworker=1');
require('../../pages/api/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
