import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  selectValue: string[] = ['Meter,Kilometre,Centimeter,Mile,Foot,Inch,Yard'];
  selectValue1: string[] = ['Meter1,Kilometre1,Centimeter1,Mile1,Foot1,Inch1,Yard1'];
  selectedValue!:string;
  selectedValue1!:string;
 
  num!:number;
  answer!:number;
    constructor() { }
  ngOnInit(): void {
  }
  Calculator(){
    if(!this.num){
      alert("try to type number");
    }
    if(!this.selectedValue || !this.selectedValue1){
      alert("select value");
    }
    if(this.selectedValue=== "Meter")
      this.ConvertfromMeter();
    if(this.selectedValue=== "Kilometre")
      this.ConvertfromKilometre();
    if(this.selectedValue=== "Centimeter")
      this.ConvertfromCentimeter();
    if(this.selectedValue=== "Mile")
      this.ConvertfromMile();
    if(this.selectedValue=== "Foot")
      this.ConvertfromFoot();
    if(this.selectedValue=== "Inch")
      this.ConvertfromInch();
    if(this.selectedValue=== "Yard")
      this.ConvertfromYard();
  }
  ConvertfromMeter(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/1000; 
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num/0.01;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.00062137;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*3.2808;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*39.370;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*1.0936;
    }
  }

  ConvertfromKilometre(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num*1000;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num; 
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num*100000;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.62137;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*3280.8;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*39370;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*1093.6;
    }
  }
  ConvertfromCentimeter(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num/100;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/100000; 
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.0000062137;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*0.032808;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*0.39370;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*0.010936;
    }
  }
  ConvertfromMile(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num/0.00062137;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/0.62137;
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num/0.0000062137;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*5280;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*63360;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*1760;
    }
  }

  ConvertfromFoot(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num/3.2808;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/3280.8;
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num/0.032808;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.00018939;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*12;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*0.33333;
    }

  }
  ConvertfromInch(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num/39.370;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/39370;
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num/0.39370;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.000015783;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*0.083333;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num*0.027778;
    }
  }
  ConvertfromYard(){
    if(this.selectedValue1 ==="Meter1"){
      this.answer=this.num/1.0936;
    }
    if(this.selectedValue1 ==="Kilometre1"){
      this.answer=this.num/1093.6;
    }
    if(this.selectedValue1 ==="Centimeter1"){
      this.answer=this.num/0.010936;
    }
    if(this.selectedValue1 ==="Mile1"){
      this.answer=this.num*0.00056818;
    }
    if(this.selectedValue1 ==="Foot1"){
      this.answer=this.num*3;
    }
    if(this.selectedValue1 ==="Inch1"){
      this.answer=this.num*36;
    }
    if(this.selectedValue1 ==="Yard1"){
      this.answer=this.num;
    }
  }
}

