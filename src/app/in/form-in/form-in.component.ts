import { Component } from '@angular/core';

@Component({
  selector: 'app-form-in',
  templateUrl: './form-in.component.html',
  styleUrls: ['./form-in.component.scss']
})
export class FormInComponent {
  isNew: boolean;
  isSwitch: string;
  constructor(){
    this.isNew = false;
    this.isSwitch = 'Login';
  }
  toggleIsNew(){
    this.isNew = !this.isNew;
  }
  toggleIsSwitch(): string{
    if(this.isNew){
      this.isSwitch = 'Sign In';
      return this.isSwitch;
    }
    else {
      this.isSwitch = 'Log In';
      return this.isSwitch;
    }

  }
}
