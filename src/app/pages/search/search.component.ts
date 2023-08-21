import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MoviesApiServiceService } from 'src/app/services/movies-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private service: MoviesApiServiceService) {}
  ngOnInit(): void {
    
  }

  searchResults: any = [];

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value);
    this.service.searchMoviesApiData(this.searchForm.value).subscribe(
      (response: any) => {
        this.searchResults = response.results;
      }
    )
  }

  

}
