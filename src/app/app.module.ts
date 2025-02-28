import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from "./people/people.component";
import { CommonModule } from "@angular/common"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PeopleComponent, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
