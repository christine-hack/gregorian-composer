import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChantInputComponent } from './chant-input/chant-input.component';
import { ChantOutputComponent } from './chant-output/chant-output.component';
import { StaffLineComponent } from './staff-line/staff-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ChantInputComponent,
    ChantOutputComponent,
    StaffLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
