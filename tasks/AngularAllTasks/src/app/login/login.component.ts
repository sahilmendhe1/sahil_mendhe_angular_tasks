import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';

import { logindetails } from './logindetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, DoCheck {
  login: logindetails = new logindetails();
  result = "";
  loginSuccess = false;
  loginFailed = false;

  courses: any[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Svelte' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'Rest' },
    { id: 7, name: 'CPP' },
    { id: 8, name: 'JavaScript' }
  ]

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }

  ngOnInit() {
    console.log("Initializing");
  }
  ngOnChange() {
    console.log("Login changed");
  }


  ngOnDestroy() {
    console.log("Login destroyed");
  }

  ngDoCheck(): void {
    console.log("Checking");
  }



  validate() {
    if (this.login.userid === "sahil" && this.login.password === "sahil") {

      // this.result="Success";
      // alert("Success")
      this.loginSuccess = true;
      this.loginFailed = false;
    }


    else {
      // this.result="Failed"
      this.loginSuccess = false
      this.loginFailed = true;
      // alert("Failed")
    }
  }
}


