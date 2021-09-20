import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
