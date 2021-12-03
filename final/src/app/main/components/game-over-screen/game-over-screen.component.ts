import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-game-over-screen',
  templateUrl: './game-over-screen.component.html',
  styleUrls: ['./game-over-screen.component.scss']
})
export class GameOverScreenComponent implements OnInit {


  stats$ = this.gameService.stats$;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  handleRestart(): void {
    window.location.href =  window.location.origin + '/simulator';
  }

  handleMainPage(): void {
    window.location.href = window.location.origin;
  }

}
