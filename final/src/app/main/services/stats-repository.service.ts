import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GameStats } from "./game.service";

@Injectable({
  providedIn: 'root'
})
export class StatsRepositoryService {

  constructor(
    private http: HttpClient,
  ) {
  }

  sendStats(stats: GameStats, userId: string): Observable<any> {
    return this.http.post<any>("api/report/", {
      ...stats,
      loose_connection: stats.connection_losses,
      user_guid: userId
    });
  }
}
