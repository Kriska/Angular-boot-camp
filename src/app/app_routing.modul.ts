import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent } from './todo-list/todo-list.component';
import {TodoEntityComponent } from './todo-entity/todo-entity.component';
import {NotFoundComponent } from './not-found/not-found.component';
import {LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todos'
    },
    {
        path: 'todos',
        component: TodoListComponent
    },
    {
    path: 'add',
    component: TodoEntityComponent
    },
    {
    path:'login',
    component: LoginComponent
    },
    {
    path: '**',
    component: NotFoundComponent
    }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
