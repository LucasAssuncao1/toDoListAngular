import { Component, DoCheck } from '@angular/core';
import { TodoButtonDeleteAllComponent } from "../todo-button-delete-all/todo-button-delete-all.component";
import { TodoInputAddItensComponent } from "../todo-input-add-itens/todo-input-add-itens.component";

// Interface
import { TaskList } from '../../model/task-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoButtonDeleteAllComponent, TodoInputAddItensComponent, FormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent  implements DoCheck{

  public taskList: Array<TaskList> =  [];

  constructor(){
    this.loadTaskList();
  }

  ngDoCheck() {
    this.setLocalStorage();
  }

  private loadTaskList () {
    if (typeof localStorage !== 'undefined') {
      this.taskList = JSON.parse(localStorage.getItem("list") || '[]');
    } else {
      this.taskList = [];
    }
  }


  public setEmitTaskList (event: string) {
    this.taskList.push({task: event, checked:false});
  }


  public deleteItemTaskList (event:number ) {
    this.taskList.splice(event, 1);
  }

  public deleteAllItems(){
    const confirm = window.confirm("Tem certeza que deseja excluir tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput (event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("A Task está vazia, deseja deletá-la ?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage (){
    if (typeof localStorage !== 'undefined' && this.taskList) {
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
