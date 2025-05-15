import { Routes } from '@angular/router';
import { UserComponent } from '../pages/user/user.component';
import { DataBindingComponent } from '../pages/data-binding/data-binding.component';
import { ControlFlowComponent } from '../pages/control-flow/control-flow.component';
import { DaynamiClassComponent } from '../pages/daynami-class/daynami-class.component';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding', //Defult route
    pathMatch: 'full',
  },
  {
    path: 'user-page',
    component: UserComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'Controlflow',
    component: ControlFlowComponent,
  },
  {
    path: 'dymanic-class',
    component: DaynamiClassComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
];
