import { Component, Input } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  list:any[]=[];
  
  addTask(item:string){

    if(item ===""){
      alert("try to write todo");
    }
    else{

      this.list.push({id:this.list.length,name:item})

    }
    
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  
  }
  
}
