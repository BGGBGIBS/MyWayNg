import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.scss']
})
export class FormSigninComponent {
  signinForm!: FormGroup;
  
  constructor(private _fb: FormBuilder,private _authService : AuthService,private _router: Router) {}
  
  
  ngOnInit() {
    this.signinForm = this._fb.group({
      user_firstname: [null, Validators.required],
      user_lastname: [null, Validators.required],
      user_email: [null, [Validators.required, Validators.email]],
      user_address: [null, Validators.required],
      user_birthdate: [null, Validators.required],
      user_password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, { validator: this.matchingPasswords('user_password', 'confirmPassword') });
  }

  onSubmit() {
    console.log("SUBMIT");
    
    if (this.signinForm.valid) {
      const password = this.signinForm.get('user_password')!.value;
      const confirmPassword = this.signinForm.get('confirmPassword')!.value;
  
      if (password !== confirmPassword) {
        this.signinForm.get('confirmPassword')!.setErrors({ 'invalid': true });
        return;
      }
  
      this._authService.register(this.signinForm.value).subscribe({
        next: (res) => {
          console.log("SUBMIT RESULTS : ",res.results);
          
          localStorage.setItem('token', res.results.token);
          console.log(res.results.user.user_id);
          
          localStorage.setItem('user_id', res.results.user.user_id.toString());
          localStorage.setItem('user_firstname', res.results.user.user_firstname);
          localStorage.setItem('user_lastname', res.results.user.user_lastname);
          localStorage.setItem('user_role', res.results.user.user_role);
          localStorage.setItem('user_email', res.results.user.user_email);
  
        },
        error: (err) => {
          console.log(err);
          
        },
        complete: () => {
          this._authService.connect();
          this.signinForm.reset;
          this._router.navigateByUrl('/cv');
        }
      });
    } else {
      this.signinForm.markAllAsTouched();
    }
  }
  

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ mismatchedPasswords: true });
      }
    };
  }
}
