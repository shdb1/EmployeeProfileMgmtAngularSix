import { ViewstudentService } from './../../services/viewstudent.service';

import { Student } from './../../models/student';
 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  name:string;
constructor(private viewStudentService : ViewstudentService) {
  this.name='shadab';
}
branches=['CS','IT','ME','CE','EE','EC'];
studentModel = new Student('Ram','2018',23,'CS','M');


onSubmit(datacame:Student){

  console.log('form submitted  '+datacame.studentAdmissionYear);
  this.viewStudentService.getStudents('');
}

  ngOnInit() {

    console.log("login module is loading");

  }
}
