import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-templates',
  templateUrl: './reference-templates.component.html',
  styleUrls: ['./reference-templates.component.scss']
})
export class ReferenceTemplatesComponent implements OnInit {

  value = 0;
  constructor() { }

  ngOnInit(): void {
    this.value = 100;
  }

}
