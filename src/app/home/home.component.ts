import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalPages:number;
  trendingAll:any = [];
  
  constructor( public _MoviesService:MoviesService ) {
    _MoviesService.getTrendingAll().subscribe(data => {
      this.trendingAll = data.results;
      this.totalPages = data.total_pages;
    });
  }

  ngOnInit() {}

}
