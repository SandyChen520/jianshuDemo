import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../assets/login.less']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.background = "#f1f1f1";
  }

}
