import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { UserService } from "../servies/user-service";
import { Router } from "@angular/router";

export interface UserData {
  report_guid: string;
  user_name: string;
  user_guid: string;
  user_theory_result: number;
  max_speed: number;
  danger_close: number;
  hits: number;
  max_height: number;
  time: number;
  status: string;
  points: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  users$: Observable<UserData[]>;
  userHistory$: Observable<UserData[]>;
  userDisplayedCols: (keyof UserData)[] = [
    "user_theory_result",
    "user_name",
    "time",
    "status",
    "max_speed",
    "max_height",
    "points",
    "danger_close",
    "hits"
  ];
  historyDisplayedCols: (keyof UserData)[] = [
    "user_theory_result",
    "time",
    "status",
    "max_speed",
    "max_height",
    "points",
    "danger_close",
    "hits"
  ];

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.users$ = this.userService.users$;
    this.userHistory$ = this.userService.userHistory$;
  }

  ngOnInit(): void {
    this.userService.fetchUsers()
  }

  handleRowClick(uid: string): void {
    this.userService.fetchUserHistory(uid);
  }

  handleBackClick(): void {
    this.router.navigate(["admin"]);
  }

}
