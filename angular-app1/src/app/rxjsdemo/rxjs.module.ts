import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './rxjs.routing';
import {FromNowPipe} from './ts/FromNowPipe';

import { ThreadsService } from './service/thread.service';
import { UserService } from './service/user.service';
import { MessageService } from './service/message.service';

import { RxjsComponent } from './rxjs.component';
import { NavComponent } from './component/nav.component';
import { WindowComponent, MessageWindowComponent } from './component/window.component';
import { ThreadComponent,ThreadDetailComponent } from './component/threads.component';
@NgModule({
  declarations: [
    RxjsComponent,
    NavComponent,
    WindowComponent,
    ThreadComponent,
    ThreadDetailComponent,
    MessageWindowComponent,
    FromNowPipe
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule
  ],
  providers: [ThreadsService, UserService, MessageService]
})
export class RxjsModule { }