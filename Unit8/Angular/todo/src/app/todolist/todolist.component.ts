import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [ TodoService ]
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.todos = this.service.pushTodos();
  }

}
