import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiServiceService {

  constructor(private http: HttpClient) { }

  // baseUrl: string = 'https://unogs-unogs-v1.p.rapidapi.com/search/titles';
  // apiKey: string = '2ae465b36emsh12cb22717a3f7cap12b661jsnf5ae048ceeab';

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '08cc33bd5ae3a747598ce2ad84376e66';
  
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  trendingMoviesApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)

  } 

  searchMoviesApiData(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieTrailer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getActionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  getAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }

  getAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }

  getDocumentaries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }

  getComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }

  getThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }
}
