import {Component} from '@angular/core';
import { MessageService } from './service/message.service';
import { ThreadsService } from './service/thread.service';
import { UserService } from './service/user.service';
import { ChatExampleData } from './chat.example.data';
@Component({
  selector: 'app-rxjs',
  template: `
    <div>
      <app-rxjs-nav></app-rxjs-nav>
      <div class="container con">
        <app-rxjs-thread></app-rxjs-thread>
        <app-rxjs-window></app-rxjs-window>
      </div>
    </div>
  `,
  styles:[`
    .con{
      padding-top:20px;
    }
  `]
})
export class RxjsComponent {
  constructor(
    private messageService: MessageService,
    private threadService: ThreadsService,
    private userService: UserService
  ){
    ChatExampleData.init(this.messageService,this.threadService,this.userService);
  }
}