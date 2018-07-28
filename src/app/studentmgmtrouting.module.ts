import { RegisterstudentComponent } from './components/registerstudent/registerstudent.component';
import { ViewstudentsComponent } from './components/viewstudents/viewstudents.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginmoduleComponent }      from './components/loginmodule/loginmodule.component';



const routes: Routes = [
  { path: 'login', component: LoginmoduleComponent },
  {path:'viewstudents',component:ViewstudentsComponent},
  {path:'registerstudent',component:RegisterstudentComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class StudentmgmtroutingModule {

}
