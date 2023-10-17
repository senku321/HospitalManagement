import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/patient/patient.component';
import { DisplayComponent } from './components/display/display.component';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import {NameOnlyPipe} from 'src/NameOnlyPipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    DisplayComponent,
    DoctorComponent,
    NameOnlyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
