import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LeaderboardComponent } from './main-app/leaderboard/leaderboard.component';
import { QueueComponent } from './main-app/queue/queue.component';
import { StatsComponent } from './main-app/stats/stats.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
