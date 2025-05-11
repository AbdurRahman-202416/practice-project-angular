import { Routes } from '@angular/router';
import { UserComponent } from '../pages/user/user.component';
import { DataBindingComponent } from '../pages/data-binding/data-binding.component';
import { ControlFlowComponent } from '../pages/control-flow/control-flow.component';

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
];
