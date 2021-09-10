import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ajaxPrefilter } from 'jquery';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

}


