import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreatmeetingComponent } from './creatmeeting/creatmeeting.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"register",
        component:RegistrationComponent
    },
    {
        path:"loginsuccess",
        component:LoginsuccessComponent
    },
    {
        path:"createmeeting",
        component:CreatmeetingComponent
    },
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"service",
        component:ServiceComponent
    }
   
    
    
];
