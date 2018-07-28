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

  ngOnInit() {

    console.log("login module is loading");

  }

}
