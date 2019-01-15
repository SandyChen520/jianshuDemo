import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Thread, Message } from '../ts/models';
import { MessageService } from './message.service';
import { map,combineLatest } from 'rxjs/operators';
import * as _ from 'underscore';
@Injectable()
export class ThreadsService{
  threads: Observable<{[key:string]: Thread}>;
  orderThreads: Observable<Thread[]>;
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  currentThreadMessages: Observable<Message[]>;
  constructor(private messageService:MessageService){
    this.threads = this.messageService.messages.pipe(
      map((messages:Message[]) => {
        let threads:{[key:string]:Thread} = {};
        messages.map((message:Message) => {
          threads[message.thread.id] = threads[message.thread.id] || message.thread;
          let messagesThread:Thread = threads[message.thread.id];
          console.log(threads, '.....')
          if(messagesThread.lastMessage || (messagesThread.lastMessage && messagesThread.lastMessage.sentAt < message.sentAt)){
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      })
    );
    this.orderThreads = this.threads.pipe(
      map((threadGroups:{[key:string]:Thread}) => {
        let threads:Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t:Thread)=> t.lastMessage.sentAt).reverse();
      })
    )
    this.currentThreadMessages = this.currentThread.pipe(
      combineLatest(this.messageService.messages, (currentThread:Thread, messages: Message[]) =>{
        
        if(currentThread && messages.length > 0){
          return  _.chain(messages).filter((message:Message) => message.thread.id === currentThread.id)
          .map((message: Message) => {
            message.isRead = true;
            
            return message;
          }).value();
        } else {
          return [];
        }
      })
    )
    this.currentThread.subscribe(this.messageService.makeThreadAsRead)
  }
  setCurrentThread(newThread:Thread):void{
    console.log('1111')
    this.currentThread.next(newThread);
  }
}