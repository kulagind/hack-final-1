import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drone-state-bar',
  templateUrl: './drone-state-bar.component.html',
  styleUrls: ['./drone-state-bar.component.scss']
})
export class DroneStateBarComponent implements OnInit {

  @Input() percentage: number | null = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
