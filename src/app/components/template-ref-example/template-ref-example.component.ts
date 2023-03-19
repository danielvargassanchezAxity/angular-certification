import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html',
  styleUrls: ['./template-ref-example.component.scss']
})
export class TemplateRefExampleComponent implements OnInit {
  myContext = { $implicit: 'World', localVariable: 'Test' };
  constructor() { }

  ngOnInit(): void {
  }

}
