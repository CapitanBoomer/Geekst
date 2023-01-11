import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ValidadorservService} from './servicios/validadores/validadoresLogin/validadorserv.service'

@Injectable({
  providedIn: 'root'
})
export class GuardianpruebaGuard implements CanActivate {
  constructor(private validador:ValidadorservService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validador.respuesta();
  }

}
