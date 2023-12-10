import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [

    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"loginsuccess",
        component:LoginsuccessComponent
    },
    {
        path:"registration",
        component:RegistrationComponent
    }
];
