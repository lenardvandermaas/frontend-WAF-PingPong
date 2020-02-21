import { Component, OnInit } from '@angular/core';
import {QueueService} from '../../queue-service.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  queue: any = [];

  getQueue() {
    return this.queueService.getQueue();
  }

  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    this.queue = this.getQueue();
    console.log(this.queue, this.getQueue());
  }

}
