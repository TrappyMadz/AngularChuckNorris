import { Component, inject, signal } from '@angular/core';
import { JokeList } from './joke-list/joke-list';
import { Header } from './header/header';
import { Buttons } from './buttons/buttons';

@Component({
  selector: 'app-root',
  imports: [JokeList, Header, Buttons],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
