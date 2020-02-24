import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieId;
  public movieDetails;
  constructor( public _ActivatedRoute:ActivatedRoute, public _MoviesService:MoviesService) {}

  ngOnInit() {
    this.movieId = this._ActivatedRoute.snapshot.params['id'];
    this.getMovieDetails();
  }

  getMovieDetails() {
    this._MoviesService.getMovieDetails(this.movieId).subscribe(data => {
      this.movieDetails = data;
    });
  }

}
