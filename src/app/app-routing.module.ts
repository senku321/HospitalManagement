import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'patient', component:PatientComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'display',component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
