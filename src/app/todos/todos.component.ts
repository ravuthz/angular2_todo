import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos;
    text;
    action;
    oldText;

    constructor() { }

    ngOnInit() {
        this.action = 'add';
        this.todos = [
            {text: 'todo one'},
            {text: 'todo two'},
            {text: 'todo last'}
        ];
    }

    addTodo() {
        this.todos.push({
            text: this.text
        });
        this.text = '';
    }

    deleteTodo(todoText) {
        for(var i=0; i<this.todos.length; i++) {
            if (this.todos[i].text == todoText) {
                this.todos.splice(i, 1);
            }
        }
    }

    editTodo(todo) {
        this.action = 'edit';
        this.oldText = todo.text;
        this.text = todo.text;
    }

    updateTodo(todo) {
        for(var i=0; i<this.todos.length; i++) {
            if (this.todos[i].text == this.oldText) {
                this.todos[i].text = this.text;
            }
        }
        this.text = '';
        this.action = 'add';
    }

}
