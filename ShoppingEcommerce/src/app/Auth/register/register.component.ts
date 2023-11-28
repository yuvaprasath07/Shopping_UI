import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;

  model: any = {};
  constructor(public api: AuthService, private messageservice: MessageService, private router: Router,) {

  }
  ngOnInit(): void {

  }
  regdata() {
    var body = {
      name: this.model.name,
      mobilenumber: this.model.mobileNumber,
      email: this.model.email,
      password: this.model.password,
      role: this.model.subscribe == true ? 'prime' : 'regular'
    }
    this.api.registerShopping(body).subscribe({
      next: (res: any) => {
        if (res.code == 200) {
          this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Register' });
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        }
      },
      error: (error: any) => {
        console.error('Error in loginshopping API:', error);
      }
    })
  }

}

