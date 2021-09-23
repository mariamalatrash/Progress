import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{TodoComponent} from './todo/todo.component';
import {StackComponent} from '../app/stack/stack.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { QueueComponent } from './queue/queue.component';
import{PercentageComponent}from './percentage/percentage.component';
import { UnitsComponent } from './units/units.component';
import { CountingComponent } from './counting/counting.component';


const routes: Routes = [
  {path:'todo' ,component:TodoComponent},
  {path:'stack' , component:StackComponent},
  {path:'queue' ,component:QueueComponent},
  {path:'age-calculator',component:AgeCalculatorComponent},
  {path:'percentage' ,component:PercentageComponent},
  {path:'units' ,component:UnitsComponent},
  {path:'counting' ,component:CountingComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
