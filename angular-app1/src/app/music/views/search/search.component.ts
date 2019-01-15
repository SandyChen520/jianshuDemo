import { Component, OnInit } from '@angular/core';
import {SpotifyServiceService} from '../spotify-service.service';
import { Spotify } from '../spotify';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public searchResult: Spotify[];
  public query:string;
  constructor(
    private spotify:SpotifyServiceService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit() {
    this.search();
  }
  search(): void{
    console.log('this.query', this.query);
    if(!this.query){return}
    this.spotify.searchByTrack('qq').subscribe(res =>{
      this.searchResult = res;
    })
  }
  submit(query: string):void{
    this.router.navigate(['music'], {queryParams:{query: query}}).then(_ => this.search
      ());
  }
}
