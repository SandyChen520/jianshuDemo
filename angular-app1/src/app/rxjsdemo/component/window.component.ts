import { Component, ChangeDetectionStrategy, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread, Message, User } from '../ts/models';
import { MessageService } from '../service/message.service';
import { ThreadsService } from '../service/thread.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat-message',
  inputs: ['message'],
  template: `
    <div class="msg-container clearfix" 
    [ngClass]="{'base-sent': !incoming, 'base-receive': incoming}">
      <div class="avatar" >
        <img src="{{message.author.avatarSrc}}">
      </div>
      <div class="messages" >
        <p>{{message.text}}</p>
        <p class="time">{{message.author.name}} • {{message.sentAt | fromNow}}</p>
      </div>
    </div>
  `,
  styles: [`
    .avatar {
      position: relative;
    }
    .base-sent {
      justify-content: flex-end;
      align-items: flex-end;
      
    }
    .base-sent .avatar:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      border: 5px solid white;
      border-right-color: transparent;
      border-top-color: transparent;
      box-shadow: 1px 1px 2px rgba(black, 0.2);
    }
    .base-receive .avatar{
      float:right;
    }
    .base-sent .avatar{
      float:left;
    }
    .base-sent .messages p{
      text-align:left;
      
    }
    .base-receive .messages p{
      text-align:right;
      
    }
    .messages{
      margin:0 58px;
    }
  `]
})
export class MessageWindowComponent implements OnInit{
  message: Message;
  currentUser: User;
  incoming: boolean;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.currentUser.subscribe((user:User) => {
      this.currentUser = user;
      if(this.message.author && user){
        this.incoming = this.message.author.id !== user.id;
      }
    })
  }
}

@Component({
  selector: 'app-rxjs-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="chat-window-container">
      <div class="chat-window">
        <div class="panel-container">
          <div class="panel panel-default">
            <div class="panel-heading top-bar">
              <div class="panel-title-container">
                <h3 class="panel-title">
                  <span class="glyphicon glyphicon-comment"></span>
                  Chat - {{currentThread.name}}
                </h3>
              </div>
              <div class="panel-buttons-container">
                <!-- you could put minimize or close buttons here -->
              </div>
            </div>
            <div class="panel-body msg-container-base">
              <app-chat-message *ngFor="let message of messages | async" [message]="message">
              </app-chat-message>

            </div>
            <div class="panel-footer">
              <div class="input-group">
                <input type="text" 
                      class="chat-input"
                      placeholder="Write your message here..."
                      (keydown.enter)="onEnter($event)"
                      [(ngModel)]="draftMessage.text" />
                <span class="btn" (click)="onEnter($event)">
                  send
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn{
      display:inline-block;
      padding:5px 10px;
      background:#ccc;
      color:#fff;

    }
    .chat-input{
      width:200px;
      border:1px solid #ccc;
      padding:5px 10px;
      background:#fff;
      margin:0 10px;
    }
  `]
  
})
export class WindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;
  constructor(
    private messageService: MessageService,
    private threadService: ThreadsService,
    private userService: UserService,
    private el: ElementRef
  ){

  }
  ngOnInit():void{
    this.messages = this.threadService.currentThreadMessages;
    console.log(this.threadService.currentThreadMessages)
    this.draftMessage = new Message();
    this.threadService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });
    this.userService.currentUser.subscribe((user: User)=>{
      this.currentUser = user;
    });
    this.messages.subscribe((messages: Message[]) => {
      setTimeout(()=>{
        this.scrollToBottom();
      })
      console.log(this.threadService.currentThreadMessages)
    })
  }
  sendMessage(): void{
    let m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messageService.addMessage(m);
    this.draftMessage = new Message();
  }
  onEnter(event: any): void{
    this.sendMessage();
    event.preventDefault();
  }
  scrollToBottom():void{
    let scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}