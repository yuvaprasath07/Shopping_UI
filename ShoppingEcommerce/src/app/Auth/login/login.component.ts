import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  user = {
    email: '',
    password: ''
  };
  onSubmit() {
    console.log('Form submitted:', this.user);
  }
}
