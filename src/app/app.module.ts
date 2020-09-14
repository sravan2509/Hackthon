import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalsComponent,
    HomeComponent,
    UpdatesComponent,
    ContactsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
