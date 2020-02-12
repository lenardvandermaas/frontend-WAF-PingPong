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


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    QueueComponent,
    StatsComponent,
    LoginComponent,
    RegisterComponent
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
