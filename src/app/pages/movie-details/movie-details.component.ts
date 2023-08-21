import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiServiceService } from 'src/app/services/movies-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  
  constructor(private service: MoviesApiServiceService, private router: ActivatedRoute) {}

  movieDetails: any;
  movieTrailer: any;
  movieCast: any;

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.getMovieDetails(id);
    this.getMovieTrailer(id);
    this.getMovieCast(id);
  }

  getMovieDetails(id: number) {
    this.service.getMovieDetails(id).subscribe(
      (response: any) => {
        console.log(response);
        this.movieDetails = response;
      }
    )
  }

  getMovieTrailer(id: number) {
    this.service.getMovieTrailer(id).subscribe(
      (response: any) => {
        console.log(response, "trailer");
        response.results.forEach((element: any) => {
          if(element.type == 'Trailer') {
            this.movieTrailer = element.key;

            return;
          }
          
        });
        
      }
    )
  }

  getMovieCast(id: number) {
    this.service.getMovieCredits(id).subscribe(
      (response: any) => {
        console.log(response, "cast");
        this.movieCast = response.cast;
      }
    )
  }
}
