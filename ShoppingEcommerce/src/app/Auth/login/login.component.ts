import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  user: any = {};
  constructor(public api: AuthService, private messageservice: MessageService, private router: Router,) { }
  ngOnInit(): void {

  }

  loginshopping() {
    var body = {
      emailId: this.user.email,
      password: this.user.password
    }
    this.api.loginshopping(body).subscribe({
      next: (res: any) => {
        if (res) {
          localStorage.setItem('token', res.message.token);
          if (res.code == 200) {
            this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Successfully Login' });
            setTimeout(() => {
              this.router.navigate(['/Layout']);
            }, 1000);
          }
        } else {
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Login Failed' });
        }
      },
      error: (error: any) => {
        console.log('Error in loginshopping API:', error);
      }
    })
  }
}
