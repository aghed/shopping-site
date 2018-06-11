import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Http.service';
import { constants } from '../../constants';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }
  token;
  constructor(private http:HttpService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.http.userLogIn(this.user).subscribe((res:any)=>{
      if(res.message=='success')
            {
              console.log(res);
              constants.token=res.token;
              constants.user=this.user;
            }
    })
  }
  checkAuth()
  {
    console.log({token:constants.token});
    console.log(constants.user);
    this.http.tokenCheck({token:constants.token}).subscribe((res:any)=>{
        console.log('from server:');
        console.log(res);
        if(res.error){
          if(res.error.error=="token_expired")
          console.log("expired");
        }
    });
  }
}
