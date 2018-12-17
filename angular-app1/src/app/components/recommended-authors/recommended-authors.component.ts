import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-authors',
  templateUrl: './recommended-authors.component.html',
  styleUrls: ['./recommended-authors.component.less']
})
export class RecommendedAuthorsComponent implements OnInit {
  rloading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
