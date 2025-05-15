import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [NgIf, NgFor],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  isVisible: boolean = true;
  isTextVisible = signal<boolean>(true);

  courseName: { id: number; name: string }[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
  ];
  citys: string[] = ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'];
  // constructor() {
  //   setTimeout(() => {
  //     this.isVisible = false;
  //     this.isTextVisible.set(false);
  //   }, 5000);
  // }

  hideText() {
    this.isTextVisible.set(false);
  }
  showText() {
    this.isTextVisible.set(true);
  }
}
