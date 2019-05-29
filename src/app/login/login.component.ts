import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';
  loading = false;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) {
   
   }
   loginForm: FormGroup;
   isSubmitted  =  false;
   get formControls() { return this.loginForm.controls; }

   login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
    // data => {
    //   this.router.navigate([this.returnUrl]);
    // }
    // error => {
    //   this.error = error;
    //   this.loading =false;
    // }
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}
}