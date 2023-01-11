import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidadorservService {
  public validar: boolean =false ;
  constructor() { }

  public acepto(){
    this.validar= true;
  }


  public respuesta(){
    return this.validar
  }
}
