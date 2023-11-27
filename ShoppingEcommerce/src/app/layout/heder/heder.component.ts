import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  usertype: string | any = localStorage.getItem("user-type")
  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.route.navigate(["/login"]);
  }
}
