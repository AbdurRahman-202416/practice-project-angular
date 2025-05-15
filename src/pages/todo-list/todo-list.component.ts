import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor, NgIf, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  http = inject(HttpClient);
  todos: any[] = [];
  currentTodo: any = null;
  newTodo: any = {
    text: '',
    priority: 'medium',
    deadline: new Date().toISOString().split('T')[0],
    complete: false,
  };
  isEditing: boolean = false;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http.get('https://crud-api-node-mongo.vercel.app/api/todos').subscribe(
      (todo: any) => {
        this.todos = todo.data;
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }

  addTodo() {
    if (!this.newTodo.text.trim()) return;

    this.http
      .post('https://crud-api-node-mongo.vercel.app/api/todos', this.newTodo)
      .subscribe(
        () => {
          this.getTodos();
          this.resetNewTodo();
        },
        (error) => {
          console.error('Error adding todo:', error);
        }
      );
  }

  toggleComplete(todo: any) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    const url = `https://crud-api-node-mongo.vercel.app/api/todos/${todo._id}`;

    this.http.put(url, updatedTodo).subscribe(
      () => {
        this.getTodos();
      },
      (error) => {
        console.error('Error updating todo status:', error);
      }
    );
  }

  editTodo(todo: any) {
    this.currentTodo = { ...todo };
    this.isEditing = true;
  }

  updateTodo() {
    const url = `https://crud-api-node-mongo.vercel.app/api/todos/${this.currentTodo._id}`;
    this.http.patch(url, this.currentTodo).subscribe(
      () => {
        this.getTodos();
        this.cancelEdit();
      },
      (error) => {
        console.error('Error updating todo:', error);
      }
    );
  }

  deleteTodo(todo: any) {
    if (confirm('Are you sure you want to delete this todo?')) {
      const url = `https://crud-api-node-mongo.vercel.app/api/todos/${todo._id}`;
      this.http.delete(url).subscribe(
        () => {
          this.getTodos();
        },
        (error) => {
          console.error('Error deleting todo:', error);
        }
      );
    }
  }

  cancelEdit() {
    this.currentTodo = null;
    this.isEditing = false;
  }

  resetNewTodo() {
    this.newTodo = {
      text: '',
      priority: 'medium',
      deadline: new Date().toISOString().split('T')[0],
      complete: false,
    };
  }

  updateTodoStatus(todo: any) {
    const updatedTodo = {
      ...todo,
      complete: !todo.complete, // Toggle the complete status
    };

    this.http
      .patch(
        `https://crud-api-node-mongo.vercel.app/api/todos/${todo._id}`,
        updatedTodo
      )
      .subscribe({
        next: (response) => {
          // Update local state if API call succeeds
          const index = this.todos.findIndex((t) => t._id === todo._id);
          if (index !== -1) {
            this.todos[index].complete = updatedTodo.complete;
          }
        },
        error: (err) => {
          console.error('Error updating todo status:', err);
          // Revert the checkbox if API call fails
          todo.complete = !todo.complete;
        },
      });
  }
}
