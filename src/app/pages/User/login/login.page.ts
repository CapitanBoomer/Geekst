import { Component, OnInit } from '@angular/core';
import {ValidadorservService} from './../../../servicios/validadores/validadoresLogin/validadorserv.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public servicio:ValidadorservService) { }

  ngOnInit() {
  }

public validar(){

}
}
