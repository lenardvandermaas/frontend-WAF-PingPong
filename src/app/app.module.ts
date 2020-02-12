import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from "@angular/common";

import { LeaderboardComponent } from './main-app/leaderboard/leaderboard.component';
import { QueueComponent } from './main-app/queue/queue.component';
import { StatsComponent } from './main-app/stats/stats.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchConfirmComponent } from './match-confirm/match-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    QueueComponent,
    StatsComponent,
    LoginComponent,
    RegisterComponent,
    MatchListComponent,
    MatchDetailsComponent,
    MatchConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
