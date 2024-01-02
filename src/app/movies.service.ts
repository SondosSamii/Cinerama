import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(public _HttpClient: HttpClient) {}
  baseUrl = "https://api.themoviedb.org/3/";
  apiKey = "?api_key=def5b6d9eea61749d3aac420b0f7ddeb";
  lang = "&language=en-US";

  getTrendingAll(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}trending/all/day${this.apiKey}`
    );
  }

  getTrendingMovies(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}trending/movie/day${this.apiKey}`
    );
  }

  getTrendingTV(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}trending/tv/day${this.apiKey}`);
  }

  getMovieDetails(id): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}movie/${id}${this.apiKey}`);
  }

  getTVDetails(id): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}tv/${id}${this.apiKey}${this.lang}`
    );
  }

  getNowPlayingMovies(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}movie/now_playing${this.apiKey}${this.lang}`
    );
  }

  getLatestMovie(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}movie/latest${this.apiKey}${this.lang}`
    );
  }

  getLatestTV(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}tv/latest${this.apiKey}${this.lang}`
    );
  }
}
