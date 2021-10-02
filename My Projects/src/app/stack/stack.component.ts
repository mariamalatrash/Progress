import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { ReplaySubject, Observable } from 'rxjs';

export interface DataTable {
  num: number;
}

const ELEMENT_DATA1: DataTable[] = [
  {num: 1},
  {num: 2},
  {num: 3},
  {num: 4},
  {num: 5},
];
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
];
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})

export class StackComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['num'];
  dataSource = [...ELEMENT_DATA1];
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

 Push() {
   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
   this.dataSource.unshift(ELEMENT_DATA[randomElementIndex]);
   this.table.renderRows();
 }

 Pop() {
   this.dataSource.shift();
   this.table.renderRows();
 }
 
 ngOnInit(): void {  
 
}
}

  

