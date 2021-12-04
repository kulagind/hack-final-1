import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../simulator/task.service";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

}
