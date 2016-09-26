import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { EmploeesService } from './emploees/';
import { EmploeesListComponent } from './emploees/';
import { EmploeesAddFormComponent } from './emploees/';
import { EmploeeItemComponent } from './emploees/emploees-list/emploee-item.component';
import { EmploeeGridComponent } from './emploees/emploee-grid/emploee-grid.component';



export const firebaseConfig = {
  apiKey: "AIzaSyB24LvwJJj8XPCq21lCLCo8BPqyfUO8kV4",
  authDomain: "nixcv-5f718.firebaseapp.com",
  databaseURL: "https://nixcv-5f718.firebaseio.com",
  storageBucket: "nixcv-5f718.appspot.com",
  messagingSenderId: "185307401801"
};

@NgModule({
  declarations: [
    AppComponent,
    EmploeesListComponent,
    EmploeesAddFormComponent,
    EmploeeItemComponent,
    EmploeeGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [EmploeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
