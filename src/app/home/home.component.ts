import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private _router : Router){}


  gotologinsuccess(){
    this._router.navigate(['/loginsuccess'])

  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
  gotoAbout(){
    this._router.navigate(['/about'])
  }
  gotoService(){
    this._router.navigate(['/service'])
  }
  gotoMember(){
    this._router.navigate(['/teammember'])
  }
  gotoContact(){
    this._router.navigate(['/contactus'])
  }
  gotoHome(){
    this._router.navigate(['/home'])
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  gotoRegister(){
    this._router.navigate(['/registration'])
  }
}

