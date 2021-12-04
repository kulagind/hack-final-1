import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {switchMap} from "rxjs/operators";
import {LoginService} from "../../login/login/login.service";
import {Router} from "@angular/router";

export type Answer = {
  guid: string,
  name: string
}

export type Question = {
  question_name: string;
  answers: Answer[];
  guid: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title: string = '';

  questions: Question[] = [];

  answers: {[key: string]: string} = {};

  private testGuid: string = '';

  constructor(
    private http: HttpClient,
    private login: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.http.get<{guid: string, name: string}[]>('/api/tests/')
      .pipe(
        switchMap(result => {
          this.title = result[0].name;
          this.testGuid = result[0].guid;
          return this.http.get<Question[]>(`/api/tests/${this.testGuid}/`)
        })
      )
      .subscribe(result => {
        this.questions = result;
      })
  }

  submit() {
    this.http.post<{result: number}>(`/api/tests/${this.testGuid}/`, {
      user: this.login.user?.guid,
      answers: [...Object.values(this.answers)]
    }).subscribe((result: {result: number}) => {
      this.router.navigate([`/result/${result.result}`]);
    });
  }

  setAnswer(question: string, answer: string) {
    this.answers[question] = answer;
  }
}
