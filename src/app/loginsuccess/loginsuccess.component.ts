import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  standalone: true,
  imports: [],
  templateUrl: './loginsuccess.component.html',
  styleUrl: './loginsuccess.component.css'
})
export class LoginsuccessComponent {
  constructor(private _router : Router){}



  


gotoregistration(){
  this._router.navigate(['/registration'])

}
}

