import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NoteList } from '../../service/note';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  noteDetail: NoteList = {
    id: 0,
    title: '',
    content: ''
  }
  likeNum: number = 20;
  isLike: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getDetail();
    $('[data-toggle="tooltip"]').tooltip()
  }

  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getDetail(id).subscribe(notes => {
      console.log(notes)
      this.noteDetail = notes;
    });
    console.log(id);
  }
  handleLike(){
    if(this.isLike){
      this.likeNum-=1;
      
    } else {
      this.likeNum+=1;
    }
    this.isLike = !this.isLike;
  }
}
