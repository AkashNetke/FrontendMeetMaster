import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { RegistrationService } from '../registration.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    HttpClientModule
  ],
  providers: [RegistrationService], 
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = new User();
  msg=' ';
  
  constructor(private _router : Router,private _service:RegistrationService){}

  

  registerUser()
  {
    this._service.RegisterUserFromRemote(this.user).subscribe((data)=>{
      console.log("Response received");
      this.msg="Registration successfull";
      this._router.navigate(['/loginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg=error.error;
    });
  };



  gotologin(){
    this._router.navigate(['/login'])

  }
}
