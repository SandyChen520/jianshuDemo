import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { Message,User,Thread } from '../ts/models';
describe('MessageService', ()=>{
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
  it('should test', ()=>{
    let user: User = new User('Nate', '');
    let thread:Thread = new Thread('t1', 'Nate', '');
    let m1:Message = new Message({
      author:user,
      text:'Hi',
      thread:thread
    });
    let m2:Message = new Message({
      author:user,
      text:'Bye',
      thread:thread
    });
    let messageService: MessageService = new MessageService();
    messageService.newMessages.subscribe((message:Message) => {
      console.log('=> newMessages: ' + message.text);
    });
    messageService.messages.subscribe((messages:Message[]) => {
      console.log('=> messages: ' + messages.length)
    });
    messageService.addMessage(m1);
    messageService.addMessage(m2);
  })
})