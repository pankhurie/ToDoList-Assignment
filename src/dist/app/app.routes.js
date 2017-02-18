"use strict";
var home_component_1 = require("./home/home.component");
var todos_component_1 = require("./todolist/todos.component");
var create_component_1 = require("./create/create.component");
var show_component_1 = require("./show/show.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'todos',
        component: todos_component_1.TodosComponent
    }, {
        path: 'create',
        component: create_component_1.CreateComponent
    }, {
        path: 'show',
        component: show_component_1.ShowComponent
    }];
//
// export const routes:Routes = [{
//     path:'home',
//     component: HomeComponent
// },{
//     path:'login',
//     component: LoginComponent
// },{
//     path:'details/:id',
//     component: LoginComponent
// }]; 
//# sourceMappingURL=app.routes.js.map