import { Student } from './../../models/student';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {
 name:string;
constructor(private loginService : LoginService) {
  this.name='shadab';
}
branches=['CS','IT','ME','CE','EE','EC'];
studentModel = new Student('Ram','2018',23,'CS','M');


onSubmit(datacame:Student){

  console.log('form submitted  '+datacame.studentAdmissionYear);
  this.loginService.saveStudent('');
}

  ngOnInit() {

    console.log("login module is loading");

  }




}
