import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {switchMap} from "rxjs/operators";

export type Answer = {
  guid: string,
  name: string
}

export type Question = {
  name: string;
  answers: Answer[];
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title: string = '';

  questions: Question[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<{guid: string, name: string}[]>('/api/tests/')
      .pipe(
        switchMap(result => {
          this.title = result[0].name;
          return this.http.get<Question[]>(`/api/tests/${result[0].guid}/`)
        })
      )
      .subscribe(result => {
        console.log(result)
      })
  }

}
