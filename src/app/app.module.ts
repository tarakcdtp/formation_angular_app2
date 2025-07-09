import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueriesComponent } from './queries/queries.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { FormsModule } from '@angular/forms';
import { YearpiPipe } from './yearpi.pipe';
import { TestService } from './test.service';
import { HmModule } from './hm/hm.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QueriesComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent,
    QueryFormComponent,
    YearpiPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
