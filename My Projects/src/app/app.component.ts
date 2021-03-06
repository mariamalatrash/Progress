import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Projects';
 
  constructor(private router:Router){}
  ShowTodo(todo:string):void{
    this.router.navigate([`${todo}`]);
  }
  ShowStack(stack:string):void{
    this.router.navigate([`${stack}`]);

  }
  ShowQueue(queue:string):void{
    this.router.navigate([`${queue}`]);

  }
  ShowageCalculator(clc:string):void{
    this.router.navigate([`${clc}`]);

  }
  ShowPercentage(per:string):void{
    this.router.navigate([`${per}`]);

  }
  ShowUnits(unit:string):void{
    this.router.navigate([`${unit}`]);
  }
  ShowCounting(count:string):void{
    this.router.navigate([`${count}`]);
  }
  openLink(){
    window.open("https://github.com/mariamalatrash")
  }
  openLinkedin(){
    window.open("https://www.linkedin.com/in/mariam-alatrash-37a2281a1");
  }
}
