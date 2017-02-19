import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {TodosComponent} from "./todolist/todos.component";
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";

export const routes:Routes = [{
    path:'home',
    component: HomeComponent
},{
    path : 'todos',
    component: TodosComponent

},{
    path : 'create',
    component: CreateComponent

},{
    path : 'edit/:i',
    component: CreateComponent
},{
    path : 'show',
    component: ShowComponent

},{
    path : '',
    redirectTo: '/show',
    pathMatch: 'full'
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