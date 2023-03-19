import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.scss']
})
export class StateButtonComponent implements OnInit {
  @Input() initialTemplate: any;
  @Input() workingTemplate: any;
  @Input() doneTemplate: any;
  currentTemplate: any;
  action$ = timer(2000);
  constructor() { }

  ngOnInit(): void {
    this.currentTemplate = this.initialTemplate;
  }

  triggerAction() {
    this.currentTemplate = this.workingTemplate;
    this.action$.subscribe(
      () => this.currentTemplate = this.doneTemplate
    );
  }

}
