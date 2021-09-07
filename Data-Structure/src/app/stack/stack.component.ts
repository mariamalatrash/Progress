import { Component, OnInit } from '@angular/core';
import { OnDestroy, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})

export class StackComponent implements OnInit {
  min: any = 0;
max: any = 0;
 constructor() { }
 

 ngOnInit(): void {  
  $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
    const id = parseFloat(data[0]) || 0; // use data for the id column
    return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
        (Number.isNaN(this.min) && id <= this.max) ||
        (this.min <= id && Number.isNaN(this.max)) ||
        (this.min <= id && id <= this.max);
  });
}  



  
}
