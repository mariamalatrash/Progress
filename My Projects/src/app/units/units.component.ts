import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  selectedValue: string[] = ['Meter,Kilometre,Centimeter,Mile,Millimeter,Foot'];
  selectedValue1: string[] = ['Meter1,Kilometre1,Centimeter1,Mile1,Millimeter1,Foot1'];
  Meter!:number;
  Kilometre!:number;
  Centimeter!:number;
  Mile!:number;
  Millimeter!:number;
  Foot!:number;
  num!:number;
  answer!:number;
    constructor() { }
  ngOnInit(): void {
  }
  calculate(){
    if(this.selectedValue.values===this.selectedValue1.values){
        this.answer=this.num;
      }
    else{
      if(this.selectedValue[1]==="Meter")
          this.ConvertfromMeters();
  }
}
  ConvertfromMeters(){
    if(this.selectedValue1[2]==="Kilometre")
      this.num/1000;
  }
}

