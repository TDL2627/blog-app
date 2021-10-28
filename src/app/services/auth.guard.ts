import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { take, tap} from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {

  }

  canActivate() {
      return this.afAuth.authState.pipe(
        take(1),
        switchMap(async (afAuthState) => {
          if (afAuthState) { // check are user is logged in
            const token = await afAuthState.getIdTokenResult()
            console.log(token.claims)
            if (!token.claims.admin) { // check claims
              this.router.navigate(['home'])
              return false
            } else {
              return true
            }
          } else {
            this.router.navigate(['dashboard'])
            return false
          }
        }),
      )
    }
  }
  
