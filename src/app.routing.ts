import { Routes, RouterModule } from '@angular/router';
import { UserSignUpComponent } from './app/userForms/user-sign-up/user-sign-up.component'; 
import { UserLoginComponent } from './app/userForms/user-login/user-login.component'; 
import { ProductListComponent } from './app/product-list/product-list.component';

const APP_ROUTES:Routes=[
    {path:'user/signUp',component:UserSignUpComponent},
    {path:'user/logIn',component:UserLoginComponent},
    {path:'products',component:ProductListComponent},
    {path:'products/new',component:ProductListComponent}
    
];

export const routing=RouterModule.forRoot(APP_ROUTES);