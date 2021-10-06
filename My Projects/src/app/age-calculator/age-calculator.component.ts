import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})


export class AgeCalculatorComponent implements OnInit {
  birthday!:Date;
  Age!:string;
  age:number | undefined;
    constructor() {

    }
    calc(){
    if(!this.birthday){
      alert("try to select birthday");
    }
    const dayBirth=this.birthday.getDate();
    const monthBirth=this.birthday.getMonth()+1;
    const year=this.birthday.getFullYear();
    let Date1=new Date;
    let dateNow=Date1.getFullYear();
    if(year<dateNow){
    let timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
    else{
      alert("Not Exist!!")
    }
    let monthNow=Date1.getMonth()+1;
    let month;
    if(monthBirth>monthNow)
      month=12-monthBirth+monthNow;
    else{
      month=monthNow-monthBirth;
    }
    this.Age="your age is "+this.age+" year and " +month+ "months";
        }
  ngOnInit(): void {
    
  }
  
  
}


