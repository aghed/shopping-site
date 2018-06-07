import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSignUpComponent } from './userForms/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './userForms/user-login/user-login.component';


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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
