import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteList } from './note';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesUrl = 'http://192.168.30.221:7000/data.json';
  constructor(
    private http: HttpClient
  ) { }
  getNotes(): Observable<NoteList[]> {
    return this.http.get<NoteList[]>(this.notesUrl)
    
  }
}
