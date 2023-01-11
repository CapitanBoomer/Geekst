import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public opcion: boolean =false ;
  constructor() { }

  ngOnInit() {
    console.log(this.opcion)
  }

}
