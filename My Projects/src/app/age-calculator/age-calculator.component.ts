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

    constructor() {

    }
    calc(){
    const day=this.birthday.getDate();
    const month=this.birthday.getMonth();
    const year=this.birthday.getFullYear();
  
    let timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    this.Age= "your are "+ age +" years old" ;
        }
  ngOnInit(): void {
    
  }
  
  
}


