import { Component, OnInit } from '@angular/core';
import { MoviesApiServiceService } from 'src/app/services/movies-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service: MoviesApiServiceService) {}

  

  bannerResults: any = [];
  trendingResults: any = [];
  actionResults: any = [];
  animationResults: any = [];
  comedyResults: any = [];
  documentaryResults: any = [];
  adventureResults: any = [];
  thrillerResults: any = [];
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionData();
    this.animationData();
    this.comedyData();
    this.documentariesData();
    this.adventureData();
    this.thrillerData()
  }

  bannerData() {
    this.service.bannerApiData().subscribe(
      (response: any) => {
        console.log(response);
        this.bannerResults = response.results;
        
      }
    );
  }

  trendingData() {
    this.service.trendingMoviesApiData().subscribe(
      (response: any) => {
        console.log(response);
        this.trendingResults = response.results;
      }
    );
  }

  actionData() {
    this.service.getActionMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.actionResults = response.results;
      }
    );
  }

  animationData() {
    this.service.getAnimationMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.animationResults = response.results;
      }
    );
  }

  comedyData() {
    this.service.getComedyMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.comedyResults = response.results;
      }
    );
  }

  documentariesData() {
    this.service.getDocumentaries().subscribe(
      (response: any) => {
        console.log(response);
        this.documentaryResults = response.results;
      }
    );
  }

  thrillerData() {
    this.service.getThrillerMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.thrillerResults = response.results;
      }
    );
  }

  adventureData() {
    this.service.getAdventureMovies().subscribe(
      (response: any) => {
        console.log(response);
        this.adventureResults = response.results;
      }
    );
  }

 


}
