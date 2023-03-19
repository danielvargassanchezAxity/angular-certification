import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent implements OnInit {

  items = [
    "Juan",
    "Pedro",
    "Carlos",
    "Andrea"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackbyfn(index: number, element: string): string {
    return element;
  }

  changeList(): void {
    const date = new Date();
    this.items.push(date.getTime().toString());
  }
  delete(index: number): void {
    this.items.splice(index, 1);
  }
}
