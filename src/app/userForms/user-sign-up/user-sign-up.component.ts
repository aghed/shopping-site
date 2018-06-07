import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../product';
import { HttpService } from '../../Http.service';
import { constants } from '../../constants';
import { ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
  providers:[HttpService]
})
export class UserSignUpComponent implements OnInit {
  
  user={
    email:'',
    password:''
};

  response={
    message:''
  }
  token:any;
  duplicated_email:boolean=false;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.token=localStorage.getItem('token');
  }

  onSubmit(form:NgForm)
  {
    this.http.userSignUp(this.user).subscribe((res:any)=>
    {
      console.log(res.message);
          if(res.message=="success")
            {
              this.http.userLogIn(this.user).subscribe((res:any)=>{
                console.log(res);
                if(res.message=="success")
                    localStorage.setItem('token',JSON.stringify({token:res.token}));
                    this.token=res.token;
              });
            }
              else if(res.status==409)
                this.duplicated_email=true;
    });
  }
}
