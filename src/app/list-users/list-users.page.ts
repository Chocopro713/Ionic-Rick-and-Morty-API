import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { ResultCharacters } from '../models/result-characters';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

  private characters: Character[];

  constructor(
    private http: HttpClient
  ) {
    this.characters = [];
   }

  ngOnInit() {
    this.http.get<ResultCharacters>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res);
      this.characters = res.results;
    });
  }

}
