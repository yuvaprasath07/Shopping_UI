import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {
  username: string | null = null;
  usertype: string | any = localStorage.getItem("user-type")
  constructor(private route: Router) { }

  ngOnInit(): void {
    const storedValue = localStorage.getItem('name');
    this.username = storedValue ? storedValue.charAt(0) : null;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(["/login"]);
  }
}
