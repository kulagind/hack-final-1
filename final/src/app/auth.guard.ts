import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./login/login/login.service";

@Injectable()
export class AuthGuard
  implements CanActivate {
  constructor(
    private login: LoginService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.login.user) {
      this.router.navigate(['/login']);
    }
    return !!this.login.user;
  }
}
