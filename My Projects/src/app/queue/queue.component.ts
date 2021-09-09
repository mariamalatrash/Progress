import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  displayedColumns: string[] = ['1', '2', '3', '4','5','6','7','8','9'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor() { }

  ngOnInit(): void {
  }
  
  Enqueue() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  Dequeue() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.shift();
    }
  }

}
