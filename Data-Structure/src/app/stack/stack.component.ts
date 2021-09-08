import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  num: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {num: 1},
  {num: 2},
  {num: 3},
  {num: 4},
  {num: 5},
  {num: 6},
  {num: 7},
  {num: 8},
  {num: 9},
  {num: 10},
];
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})

export class StackComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['num'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

 addData() {
   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
   this.table.renderRows();
 }

 removeData() {
   this.dataSource.pop();
   this.table.renderRows();
 }

 ngOnInit(): void {  
 
}  



  
}
