import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  uname:string;
  pswd:string;
  clickMessage='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitform(){

  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
forgotpswd(){
  this.router.navigateByUrl('/forgotpassword;');
}
LoginClick(){
  this.router.navigateByUrl('/main;');
}
}