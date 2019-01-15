import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteList } from './note';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PopupService } from '../pakeages/popup/popup.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesUrl = 'http://localhost:8088/demo/api';
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private popup: PopupService
  ) { }
  // getNotes(): Observable<NoteList[]> {
  //   return this.http.get<NoteList[]>(this.notesUrl);
  // }
  getNotes(): Observable<NoteList[]> {
    return this.http.get<any>(this.notesUrl+'/note').pipe(
      map(notes => notes.data),
      catchError(this.handleError('getHeroes', []))
    );
  }
  getDetail(id:number): Observable<NoteList> {
    return this.http.get<any>(this.notesUrl+'/detail?id='+id).pipe(
      map(notes => notes.data),
      // tap(notes => this.log('成功')),
      catchError(this.handleError<any>('getList', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      if(error.message){
        // this.log(`${operation} failed: ${error.message}`);
        this.popup.showAsComponent('网络未连接');

      } else {
        this.popup.showAsComponent('网络未连接');
      }
      
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(message);
  }

}
