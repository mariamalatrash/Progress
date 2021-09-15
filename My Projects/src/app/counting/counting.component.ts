import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  paragraph!:string;
  answer!:number;
  constructor() { }

  ngOnInit(): void {
  }
  CalculateCount(){
    var count=0;
    if(this.paragraph.split('br'))
      count +=1;
    count=this.paragraph.split(' ').length  ;
    this.answer=count;
  }

}
