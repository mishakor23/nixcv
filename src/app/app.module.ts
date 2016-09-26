import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { EmploeesListComponent } from './emploees/emploees-list/emploees-list.component';
import { EmploeesAddFormComponent } from './emploees/emploees-add-form/emploees-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmploeesListComponent,
    EmploeesAddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
