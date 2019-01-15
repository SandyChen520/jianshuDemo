import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopupService } from './pakeages/popup/popup.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { RecommendedAuthorsComponent } from './components/recommended-authors/recommended-authors.component';
import { DetailComponent } from './views/detail/detail.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PopupComponent } from './pakeages/popup/popup.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { EditComponent } from './views/edit/edit.component';
import { MusicModule } from './music/views/music.module';
import { RxjsModule } from './rxjsdemo/rxjs.module';
import { ReduxModule } from './reduxdemo/redux.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoteListComponent,
    RecommendedAuthorsComponent,
    DetailComponent,
    CommentListComponent,
    MessagesComponent,
    PopupComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MusicModule,
    RxjsModule,
    ReduxModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
