import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadsService } from '../service/thread.service';
import { Thread } from '../ts/models';

@Component({
  inputs:['thread'],
  selector: 'app-rxjs-thread-detail',
  template: `
    <div class="conversation">
      <div class="pull-left">
        <img class="avatar" src="{{thread.avatarSrc}}"/>
      </div>
      <div class="pull-right"><a (click)="clicked($event)">select</a></div>
      <div class="media-body">
        <h5 class="media-heading contact-name">{{thread.name}}
          <span *ngIf="selected">&bull;</span>
        </h5>
        <small>{{thread.lastMessage.text}}</small>
      </div>
      
    </div>
  `,
  styles:[`
    .conversation{
      border-bottom:1px solid #ccc;
      padding:10px;
      height:69px;
    }
    a{
      cursor:pointer;
    }
    .pull-right{
      line-height:49px;
    }
    .media-body{
      padding:0 10px 0 5px;
    }
    h5{
      line-height:20px;
    }
    small{
      line-height:18px;
    }
  `]
})
export class ThreadDetailComponent implements OnInit {
  thread: Thread;
  selected: boolean = false;
  constructor(private threadsService: ThreadsService){

  }
  ngOnInit(): void{
    this.threadsService.currentThread.subscribe((currentThread: Thread) => {
      this.selected = currentThread && this.thread && (currentThread.id === this.thread.id)
    });
  }
  clicked(event: any): void{
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}

@Component({
  selector: 'app-rxjs-thread',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row rcon">
      <div class="conversation-wrap">
        <app-rxjs-thread-detail
        *ngFor="let thread of threads | async"
        [thread]=thread>
        </app-rxjs-thread-detail>
      </div>
    </div>
  `,
  styles:[`
    .rcon{
      box-shadow:0 0 10px 0px #ccc;
    }
  `]
})
export class ThreadComponent {
  threads: Observable<any>;
  constructor(
    private threadService:ThreadsService
  ){
    this.threads = this.threadService.orderThreads;
  }
}