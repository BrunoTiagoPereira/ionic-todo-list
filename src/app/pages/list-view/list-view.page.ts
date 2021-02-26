import { TodoService, TodoProps } from './../../api/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {


  todoList: TodoProps[]  = [];
  listIsLoaded:boolean = false;



  
  constructor(private todoService: TodoService) {

   }

   ngOnInit() {
    this.loadTodoList(); 


  }

  async loadTodoList(){

    this.todoList = await this.todoService.getTodoList();

    this.listIsLoaded = true;
  }

}
