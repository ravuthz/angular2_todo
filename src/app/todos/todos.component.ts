import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos;
    text;

    constructor() { }

    ngOnInit() {
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
        this.text = "";
    }

}
