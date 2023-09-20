import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user_toggle_flip = true;
  errorInLogin : string=""
  constructor(private userService:UsersService,private router : Router) { }

  ngOnInit(): void {
  }

  login(userloginData:any){
    if(userloginData.name && userloginData.password) {
    this.userService.getuser(userloginData).subscribe((res:any)=>{ 
      if(res.body && res && res.body.length){
        localStorage.setItem("user",JSON.stringify(res.body));
        this.router.navigate(['/'])     
      }else{
        this.errorInLogin = "User or password is invalid"
      }
    })}else{
      this.errorInLogin = "User or password is invalid"
    }
  }

  signUp(signupdata:any){
    this.userService.adduser(signupdata).subscribe((res)=>{
      console.log("User registered")
      localStorage.setItem("user",JSON.stringify(res.body));
      this.router.navigate(['/'])
    })
  }
  havingLogin(){
    console.log("already account---");    
    this.user_toggle_flip = false;
  }
  nothavingLogin(){
    console.log("need to signup-----------");
    
    this.user_toggle_flip = true;
  }


}
