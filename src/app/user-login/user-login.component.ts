import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { userSigneup, userlogin } from 'src/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginSignupCondition=true
  usersigned: string | undefined
  usersignedupdisplay=false
  constructor(private userservice:UserServicesService , private router:Router) { }

  ngOnInit(): void {
    this.userservice.userauthreload()
    
  }
  // usersignUp(){

  // }
  userSignUp(data:userSigneup){
    this.userservice.userSignup(data).subscribe((res)=>{
      localStorage.setItem('user',JSON.stringify(res.body))
      this.router.navigate(['/'])
    })
  }
  userlogin(data:userlogin){
    this.userservice.userlogin(data).subscribe((res)=>{
      if(res)
      {
        localStorage.setItem('user',JSON.stringify(res.body))
        this.router.navigate(['/'])
        
      }
    })
  }

  openusersignup(){
    this.userloginSignupCondition=false
  }
  openuserlogin(){
    this.userloginSignupCondition=true
  }

}
