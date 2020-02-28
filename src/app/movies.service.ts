import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {
    
  }

  getTrendingAll():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=def5b6d9eea61749d3aac420b0f7ddeb");
  }

  getTrendingMovies():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movies/day?api_key=def5b6d9eea61749d3aac420b0f7ddeb");
  }

  getTrendingTV():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=def5b6d9eea61749d3aac420b0f7ddeb");
  }

  getMovieDetails(id):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=def5b6d9eea61749d3aac420b0f7ddeb`);
  }

  getTVDetails(id):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=def5b6d9eea61749d3aac420b0f7ddeb&language=en-US`);
  }

  getNowPlayingMovies():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=def5b6d9eea61749d3aac420b0f7ddeb&language=en-US&page=1");
  }

  getLatestMovie():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/latest?api_key=def5b6d9eea61749d3aac420b0f7ddeb&language=en-US");
  }

  getLatestTV():Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/tv/latest?api_key=def5b6d9eea61749d3aac420b0f7ddeb&language=en-US");
  }
}
