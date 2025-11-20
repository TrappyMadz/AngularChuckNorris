import { Component } from '@angular/core';
import { JokeListService } from '../joke-list/joke-list.service';
import { inject } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-buttons',
  imports: [SearchBar],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
  jokeService = inject(JokeListService);
  fetchNewJoke(): void {
    this.jokeService.setJoke();
  }
}
