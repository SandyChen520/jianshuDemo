import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string = "去玩儿";
  types:string = 'bg-primary';
  show:boolean = false;
  constructor() { }
  add(message:string,types:string = 'bg-primary'): void{
    this.messages = message;
    this.types = types;
    this.show = true;
    setTimeout(()=>{
      this.show = false;
    }, 2000)
  }
}
