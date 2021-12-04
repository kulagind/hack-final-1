import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

  @ViewChild('statsButton') private statsButton: ElementRef;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.statsButton.nativeElement, 'click').subscribe(() => {
      this.router.navigate(['admin/stats']);
    });
  }

  saveResult() {

  }

  getPractice() {

  }
}
