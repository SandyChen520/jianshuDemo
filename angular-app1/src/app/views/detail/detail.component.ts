import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDetail();
    $('[data-toggle="tooltip"]').tooltip()
  }

  getDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
