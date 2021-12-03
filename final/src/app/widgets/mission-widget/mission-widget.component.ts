import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../simulator/task.service";

@Component({
  selector: 'app-mission-widget',
  templateUrl: './mission-widget.component.html',
  styleUrls: ['./mission-widget.component.scss']
})
export class MissionWidgetComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

}
