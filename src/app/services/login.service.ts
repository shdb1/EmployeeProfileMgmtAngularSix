import { Student } from './../models/student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor( private http: HttpClient) { }

  public  saveStudent(studentname:string) : string {
console.log("save student called!!");
console.log("name to save is:"+studentname);
//this.http.get('http://localhost:8080/');
 //this.http.get<string>('http://127.0.0.1:8080/');
 this.http.get('http://localhost:8181/booking/testsession').subscribe((res)=>{
   console.log('response cme')
  console.log(res);
});
console.log('saved!!!!!!!!!!!!!!!!!')
return 'You have been registered';


  }

}
