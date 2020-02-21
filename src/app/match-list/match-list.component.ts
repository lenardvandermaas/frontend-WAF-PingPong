import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  constructor(private matchService: MatchesService) { }

  matches: any;

  ngOnInit(): void {
    this.matches = this.matchService.getMatches();
  }

}
