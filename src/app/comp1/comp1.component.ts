import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  title = 'Comp1';
  counter = 0;
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('click', () => {
      this.counter++;
    });
  }

  handleClick(event: Event): void {
    event.stopPropagation();
    this.counter++;
  }
}
