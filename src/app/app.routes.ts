import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreatmeetingComponent } from './creatmeeting/creatmeeting.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeammemberComponent } from './teammember/teammember.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"registration",
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
    },
    {
        path:"teammember",
        component:TeammemberComponent
    },
    {
        path:"contact",
        component:ContactusComponent
    },
    {
        path:'header',
        component:HeaderComponent
    },
    {
        path:'footer',
        component:FooterComponent
    }  
];
