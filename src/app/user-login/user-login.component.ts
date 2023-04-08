import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginSignupCondition=true
  constructor() { }

  ngOnInit(): void {
  }
  // usersignUp(){

  // }
  userSignUp(data:any){
    console.log("user login data----",data)
  }
  userlogin(data:any){
    console.log("login user data----",data)
  }

  openusersignup(){
    this.userloginSignupCondition=false
  }
  openuserlogin(){
    this.userloginSignupCondition=true
  }

}
