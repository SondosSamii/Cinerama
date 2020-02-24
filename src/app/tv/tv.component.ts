import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  public trendingTV:any[];
  constructor(public _MoviesService:MoviesService ) {
    _MoviesService.getTrendingTV().subscribe(data => {
      this.trendingTV = data.results;
    });
  }

  ngOnInit() {
  }

}
