import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Spotify } from './spotify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
  private baseUrl:string = 'http://localhost:8088/demo/api/note';
  constructor(private http:HttpClient) { }
  searchByTrack(query:string): Observable<Spotify[]>{
    let param: string = [`q=${query}`, `type=track`].join('&');
    return this.http.get<any>(this.baseUrl + '?' +param).pipe(
      map(res => res.data)
    )
    
  }
}

