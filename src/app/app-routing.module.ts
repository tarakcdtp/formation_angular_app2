import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QueriesModule } from './queries/queries.module';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'queries',
    component : LayoutComponent,
    loadChildren: () => import('./queries/queries.module').then((m) => QueriesModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
