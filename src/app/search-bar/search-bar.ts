import { Component, inject } from '@angular/core';
import { JokeListService } from '../joke-list/joke-list.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  jokeService = inject(JokeListService);
  fetchSearchJoke(term: String) {
    const trimmedTerm = term.trim();
    if (trimmedTerm.length > 0) {
      this.jokeService.searchJoke(trimmedTerm);
    }
  }
}
