import { Injectable } from '@angular/core';
import { promise } from 'protractor';


export interface TodoProps{

   name:string,
   isCompleted:boolean

}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList:TodoProps[] = [];
  

  constructor() { 

    this.todoList = [
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Mobile", isCompleted:false},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
      { name:"Study Ionic", isCompleted:true},
      { name:"Study Angular", isCompleted:true},
    ]


  }

    async getTodoList (): Promise<TodoProps[]> {
    return new Promise(resolve=>{
      resolve(this.todoList);
    });
  }
}
