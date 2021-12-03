import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
// @ts-nocheck

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: { name: string, guid: string, result: string } | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  login(name: string): Observable<{ name: string, guid: string, result: string }> {
    return this.http
      .post<{ name: string, guid: string }>('/api/user/', {name})
      .pipe(
        switchMap((result: {guid: string}) => this.http.get<{ name: string, guid: string, result: string }>(`/api/user/${result.guid}/`)),
        tap(result => {
          localStorage.setItem('user', JSON.stringify(result));
        }),
      )
  };

  logout() {
    localStorage.removeItem('user');
    this.user = undefined;
    this.router.navigate(['/login']);
  }
}
