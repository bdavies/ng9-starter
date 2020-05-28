import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: {
      title: 'Welcome back',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
