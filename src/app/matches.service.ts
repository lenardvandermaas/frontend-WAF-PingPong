import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matches: any = [
    "niels",
    "ruben",
    "lennie is weg"
  ]

  getMatches() {
    return this.matches;
  }

  constructor() {
    this.getApiData();
  }

  getApiData() {
    fetch('http://localhost:3000/things/movies').then(data => {
      return data.json();
    }).then(data => {
      console.log(data);
      data.forEach(element => {
        if(!element.name) return;
        this.matches.push(element.name);
      });
    }).catch(err => {
      console.log('an error occured while fetching', err)
    });
  }
}
