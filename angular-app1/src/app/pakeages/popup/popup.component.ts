import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
  host: {
    '[@state]': 'state'
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(30%)',opacity:1})),
      state('void, closed', style({transform: 'translateY(0%)',opacity:0})),
      transition('* => *', animate('200ms ease-in-out'))
    ])
  ]
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';
  @Input()
  set message(message: string){
    this._message = message;
    this.state = 'opened';
    setTimeout(()=>{
      this.closed.next();
    },1000)
  }
  get message():string{
    return this._message;
  }
  _message: string;
  @Output()
  closed = new EventEmitter()
  constructor() { }
  ngOnInit(){
    this.closed.subscribe(()=>{
      this.state = 'closed';
    })
  }

}
