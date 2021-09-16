import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StackComponent} from '../app/stack/stack.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { QueueComponent } from './queue/queue.component';
import{PercentageComponent}from './percentage/percentage.component';
import { UnitsComponent } from './units/units.component';
import { CountingComponent } from './counting/counting.component';
import{WeatherComponent} from './weather/weather.component';



const routes: Routes = [
  {path:'stack' , component:StackComponent},
  {path:'queue' ,component:QueueComponent},
  {path:'age-calculator',component:AgeCalculatorComponent},
  {path:'percentage' ,component:PercentageComponent},
  {path:'units' ,component:UnitsComponent},
  {path:'counting' ,component:CountingComponent},
  {path:'weather' ,component:WeatherComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
