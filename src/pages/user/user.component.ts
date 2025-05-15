import { Component, OnInit, inject } from '@angular/core';
import { IUser } from '../../app/model/userList.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  http = inject(HttpClient);

  users: IUser[] = [];
  selectedUser: IUser | null = null; // Initialize as null

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users') // Add type to request
      .subscribe((users) => {
        this.users = users;
        if (this.users.length > 0) {
          this.selectedUser = this.users[0];
        }
        console.log(this.users);
      });
  }

  getUserById(id: number): void {
    this.http
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`) // Add type to request
      .subscribe((user) => {
        this.selectedUser = user;
        console.log(this.selectedUser);
      });
  }
}
