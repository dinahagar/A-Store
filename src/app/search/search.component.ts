import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
  }

  Search() {
    this.searchService.setSearchTerm(this.searchTerm)
  }
}
