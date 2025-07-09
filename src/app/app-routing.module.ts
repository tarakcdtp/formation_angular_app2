import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueriesComponent } from './queries/queries.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: QueryFormComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'show/:id',
    component: DetailsComponent
  },
  {
    path: 'edit/:id',
    component: QueryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
