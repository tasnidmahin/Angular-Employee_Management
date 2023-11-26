import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from './enums/app-routing.enum';

const routes: Routes = [
  {
    path: ApplicationRoutes.USERS,
    loadChildren: () => 
      import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    redirectTo: ApplicationRoutes.USERS,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
