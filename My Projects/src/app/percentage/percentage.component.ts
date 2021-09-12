import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  username!: string;
  num!:number;
  num1!:number;
  percent!:string;
  constructor() {

   }

  ngOnInit(): void {
  }
  calc(){
  const percent1 = (this.num1 / 100) * this.num;
  this.percent =this.num + "% of " + this.num1 + " is " +percent1;

  }
}


