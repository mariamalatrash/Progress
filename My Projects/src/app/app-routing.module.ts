import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StackComponent} from '../app/stack/stack.component';
import { QueueComponent } from './queue/queue.component';


const routes: Routes = [
  {path:'stack' , component:StackComponent},
  {path:'queue' ,component:QueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
