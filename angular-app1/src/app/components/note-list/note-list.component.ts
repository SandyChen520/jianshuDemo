import { Component, OnInit } from '@angular/core';
import { NoteList } from '../../service/note';
import { NoteService } from '../../service/note.service';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {
  noteList: NoteList[];

  constructor(private noteService:NoteService) { console.log(NoteService)}
  getList(): void{
    console.log(this.noteService)
    this.noteService.getNotes().subscribe(notes => {
      console.log(notes)
      this.noteList = notes;
    });
  }
  ngOnInit() {
    this.getList()
  }

}
