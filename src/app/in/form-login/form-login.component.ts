import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  loginForm!: FormGroup;
  
  constructor(private _fb: FormBuilder,private _router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      user_email: [null, [Validators.required, Validators.email]],
      user_password: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log("SUBMIT");
    
    if (this.loginForm.valid) {
  
      this._authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log("SUDMIT RESULT : ",res.result);
          
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('user_id', res.result.user.user_id.toString());
          localStorage.setItem('user_firstname', res.result.user.user_firstname);
          localStorage.setItem('user_lastname', res.result.user.user_lastname);
          localStorage.setItem('user_email', res.result.user.user_email);
          localStorage.setItem('user_password', res.result.user.user_password);
          // console.log("STORAGE : ", localStorage);
          
  
          console.log("LOGGED IN : ", res.result.user.user_email);
          this._authService.connect();
        },
        error: (err) => {
          console.log(err);
  
        },
        complete: () => {
          console.log("USER ID :",localStorage.getItem('user_id'));
          
          this._router.navigateByUrl(`/cv`);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
}
