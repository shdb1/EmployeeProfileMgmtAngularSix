import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public  saveStudent(studentname:string) : string {
console.log("save student called!!");
console.log("name to save is:"+studentname);
return 'You have been registered';


  }

}
