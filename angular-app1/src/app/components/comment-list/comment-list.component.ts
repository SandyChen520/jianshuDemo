import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})
export class CommentListComponent implements OnInit {
  n:number[] = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
