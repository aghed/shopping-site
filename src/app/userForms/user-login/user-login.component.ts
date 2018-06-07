import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../Http.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[HttpService]
})
export class UserLoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }

  constructor(private http:HttpService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.http.userLogIn(this.user).subscribe((res:any)=>{
      if(res.message=='success')
            localStorage.setItem('token', JSON.stringify({token:res.token}));
    })
  }
}
