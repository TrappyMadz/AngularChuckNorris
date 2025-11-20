import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { currentJoke$ } from './joke-list.service';

@Component({
  selector: 'app-joke-list',
  imports: [CommonModule],
  templateUrl: './joke-list.html',
  styleUrl: './joke-list.css',
  standalone: true,
})
export class JokeList {
  joke$: Observable<String> = currentJoke$;
}
