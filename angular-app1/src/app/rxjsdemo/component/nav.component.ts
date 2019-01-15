import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { ThreadsService } from '../service/thread.service';
import { combineLatest } from 'rxjs/operators';
import { Thread, Message } from '../ts/models';
import * as _ from 'underscore';
@Component({
  selector: 'app-rxjs-nav',
  template: `
  <nav class="navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="https://ng-book.com/2">
          ng-book 2
        </a>
      </div>
      <p class="navbar-text navbar-right">
        <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{unreadMessagesCount}}</span>
        </button>
      </p>
    </div>
  </nav>
  `,
  styles: [`
    nav{
      background:#fff;
      border-bottom:1px solid #ccc;
      height:59px;
    }
  `]
})
export class NavComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(
    private messageService: MessageService,
    private threadsService: ThreadsService
  ){

  }
  ngOnInit(): void {
    this.messageService.messages.pipe(
      combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread:Thread) => [currentThread, messages]
      )
    ).subscribe(([currentThread, messages]: [Thread, Message[]]) => {
      this.unreadMessagesCount = _.reduce(
        messages,
        (sum:number, m: Message) => {
          let messageIsInCurrentThread:boolean = m.thread && currentThread && (currentThread.id === m.thread.id);
          if(m && !m.isRead && !messageIsInCurrentThread){
            sum = sum+1;
          }
          return sum;
        },
        0
      )
    })
    
  }
}