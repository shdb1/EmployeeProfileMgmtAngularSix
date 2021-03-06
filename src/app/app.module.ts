import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentmgmtroutingModule } from './/studentmgmtrouting.module';
import { LoginmoduleComponent } from './components/loginmodule/loginmodule.component';
import { ViewstudentsComponent } from './components/viewstudents/viewstudents.component';
import { RegisterstudentComponent } from './components/registerstudent/registerstudent.component';
import { LoginService } from './services/login.service';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ViewstudentService } from './services/viewstudent.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbodyComponent,
    FooterComponent,
    LoginmoduleComponent,
    ViewstudentsComponent,
    RegisterstudentComponent
  ],
  imports: [
    BrowserModule,
    StudentmgmtroutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [LoginService,ViewstudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
