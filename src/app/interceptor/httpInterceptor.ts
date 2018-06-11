import { Injectable } from '@angular/core';
import {
    HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';
import { HttpService } from '../Http.service';
import { constants } from '../constants';
import 'rxjs/add/operator/do';

@Injectable()
export class httpInterceptor implements HttpInterceptor {

    constructor(private http:HttpService){
        
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor fired');
        console.log(constants.user);
        return next.handle(req).do(
            event=>{},
            error=>{
                if(error instanceof HttpErrorResponse)
                    if(error.status===401)
                        {
                            console.log('reauthinticate');      
                            this.http.userLogIn(constants.user).subscribe(
                            (res:any)=>{
                                console.log(constants.user);
                                if(res.message=='success')
                                    this.http.userLogIn(constants.user).subscribe(
                                        (res:any)=>{
                                            if(res.message=='success')
                                                {
                                                    console.log(res);
                                                    constants.token=res.token;
}
                                        }
                                    );
                            }
                        );}
                        else if(error.status===500)
                                {
                                    console.log('server_error');
                                    console.log(error);
                                }
            }
        );
    }
}