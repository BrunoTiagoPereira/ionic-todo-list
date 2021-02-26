import { TodoProps } from './../../api/todo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.scss'],
})
export class TodoItemDetailComponent implements OnInit {

  @Input() todo:TodoProps;

  constructor() { }

  ngOnInit() {}

}
