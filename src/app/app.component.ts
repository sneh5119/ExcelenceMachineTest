import { Component, ViewChild } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExcellenceMachineTest';
  todos;
  @ViewChild('box') inputName;

  constructor(
    private todoService : TodoService){
    }


    ngOnInit(): void {
      this.getTodosData();
   }

   getTodosData(){    
    this.todos=this.todoService.getTodos();
    console.log("todos array =>> ",this.todos)
  }

  addTask(val){

    if(!val){
      alert("Please Enter Some Value !!!")
    }else{

      let count=this.todos.length+1;
    let task={
       id:count++,
       description:val,
     }
     this.todos.push(task);
     this.inputName.nativeElement.value='';
     console.log("todos array =>> ",this.todos)
    }

    
  }


}
