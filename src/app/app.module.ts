import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSignUpComponent } from './userForms/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './userForms/user-login/user-login.component';
import { HttpService } from './Http.service';
import { httpInterceptor } from './interceptor/httpInterceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    UserSignUpComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:httpInterceptor,
    multi:true  
  }
  ,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
