import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private queue = [
    "lennie",
    "nelis",
    "bobbo",
    "henk",
    "ruby",
    "karel",
    "olaf"
  ]

  public getQueue() {
    return this.queue;
  }

  constructor() { }
}
