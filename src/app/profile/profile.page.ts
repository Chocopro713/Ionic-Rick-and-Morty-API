import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private profileId: string;
  private character: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
      this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
      this.http.get<Character>('https://rickandmortyapi.com/api/character/'+ this.profileId)
      .subscribe(res => {
        this.character = res;
      });
  }

}
