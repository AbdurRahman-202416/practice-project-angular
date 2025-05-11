import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daynami-class',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './daynami-class.component.html',
  styleUrl: './daynami-class.component.css',
})
export class DaynamiClassComponent {
  dynamicClass: string = '';
  className: string = '';
}
