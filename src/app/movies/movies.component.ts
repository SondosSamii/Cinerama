import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public trendingMovies:any[];
  constructor( public _MoviesService:MoviesService ) {
    _MoviesService.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data.results;
    });
  }

  ngOnInit() {
  }

}
