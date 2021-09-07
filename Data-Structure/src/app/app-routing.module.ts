import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StackComponent} from '../app/stack/stack.component';


const routes: Routes = [
  {path:'stack' , component:StackComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
