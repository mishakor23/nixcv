import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { EmploeesService } from './emploees/';
import { EmploeesListComponent } from './emploees/';
import { EmploeesAddFormComponent } from './emploees/';

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
  providers: [EmploeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
