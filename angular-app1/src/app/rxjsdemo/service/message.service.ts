import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Message, Thread, User } from '../ts/models';
import { filter, scan, publishReplay, refCount,map } from 'rxjs/operators';

let initialMessages: Message[] = [];
interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}
@Injectable()
export class MessageService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  makeThreadAsRead: Subject<any> = new Subject<any>();
  constructor(){
    this.messages = this.updates.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      },initialMessages),
      publishReplay(1),
      refCount()
    );
    this.create.pipe(
      map((message:Message): IMessagesOperation => {
        return (messages: Message[]) => {
          return messages.concat(message);
        }
      })
    ).subscribe(this.updates);
    this.newMessages.subscribe(this.create);
    this.makeThreadAsRead.pipe(
      map((thread:Thread) => {
        return (messages:Message[]) => {
          return messages.map((message:Message) => {
            if(message.thread.id === thread.id){
              message.isRead = true;
            }
            return message;
          })
        }
      })
    ).subscribe(this.updates);
  }
  
  addMessage(message: Message): void{
    this.newMessages.next(message);
  }
  messagesForThreadUser(thread:Thread, user:User): Observable<Message>{
    return this.newMessages.pipe(
      filter((message:Message) => {
        return (message.thread.id === thread.id) && (message.author.id !== user.id);
      })
    )
  }
}