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
  
  ShowStack(stack:string):void{
    this.router.navigate([`${stack}`]);

  }
  ShowQueue(queue:string):void{
    this.router.navigate([`${queue}`]);

  }

  
}
