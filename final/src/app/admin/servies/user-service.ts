import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { UserData } from "../statistics/statistics.component";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  userHistory$: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  constructor(private http: HttpClient) {
  }

  fetchUsers(): void {
    this.http.get<UserData[][]>("api/user/all/").subscribe((response) => {
      const uids: string[] = [];
      this.users$.next(
        // @ts-ignore
        response.flatMap((item) => item).reduce((acc, item) => {
          if (!uids.includes(item.user_guid)) {
            uids.push(item.user_guid);
            acc.push(item);
          }
          return acc;
        }, []));
    })
  }

  fetchUserHistory(uid: string): void {
    const params = new HttpParams().set("user_guid", uid).set("all", "all");
    this.http.get<UserData[][]>(`api/report/all/`, { params }).subscribe((response) => {
      this.userHistory$.next(
        // @ts-ignore
        response.flatMap((item) => item)
      );
    })
  }

}
