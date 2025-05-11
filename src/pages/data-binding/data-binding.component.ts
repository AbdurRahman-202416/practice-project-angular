import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  courseName: string = 'Angular';
  courseDuration: string = '3 months';
  isReactive: boolean = true;
  myclassName: string = 'bg-red-500';
  inputType: string = 'checkbox';
  selectCourseName: string = 'Angular';

  showAlert(): void {
    alert('Hello, this is a data binding example!');
  }

  ChangeCourseName(name: string): void {
    this.courseName = name;
  }

  courseChnage(): void {
    alert('Course name changed');
  }
}
