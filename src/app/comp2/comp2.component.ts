import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  title = 'Comp2';
  counter = 0;
  constructor() {}

  ngOnInit(): void {}

  handleClick(event: Event): void {
    this.counter++;
  }
}
