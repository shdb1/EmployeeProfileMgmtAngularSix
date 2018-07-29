import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViewstudentService {

  constructor( private http: HttpClient) { }

  public  getStudents(studentname:string) : string {
console.log("get student!!");
console.log("name to get is:"+studentname);
//this.http.get('http://localhost:8080/');
 //this.http.get<string>('http://127.0.0.1:8080/');
 this.http.get('http://localhost:8181/booking/testsession').subscribe((res)=>{
   console.log('response came to get student')
  console.log(res);
});
console.log('got!!!!!!!!!!!!!!!!!')
return 'You have been registered';


  }

}
