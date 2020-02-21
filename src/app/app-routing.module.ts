import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user-management/login/login.component';
import {RegisterComponent} from './user-management/register/register.component';

import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchConfirmComponent } from './match-confirm/match-confirm.component';

// import { LeaderboardComponent } from './main-app/leaderboard/leaderboard.component';
import { QueueComponent } from './main-app/queue/queue.component';
// import { StatsComponent } from './main-app/stats/stats.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'matchlist', component: MatchListComponent},
  { path: 'matchdetails', component: MatchDetailsComponent},
  { path: 'matchConfirm', component: MatchConfirmComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},

  // { path: 'leaderboard', component: LeaderboardComponent},
  // { path: 'stats', component: StatsComponent},
  { path: 'queue', component: QueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
