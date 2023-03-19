import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildComponent } from './content-child/content-child.component';
import { DvsHeaderComponent } from './dvs-header/dvs-header.component';
import { DvsBodyComponent } from './dvs-body/dvs-body.component';
import { DvsFooterComponent } from './dvs-footer/dvs-footer.component';
import { StateButtonComponent } from './state-button/state-button.component';
import { UsingStateButtonComponent } from './using-state-button/using-state-button.component';
import { TemplateRefExampleComponent } from './template-ref-example/template-ref-example.component';
import { SecurityComponent } from './security/security.component';
import { ReferenceTemplatesComponent } from './reference-templates/reference-templates.component';




@NgModule({
  declarations: [
    ContentChildComponent,
    DvsHeaderComponent,
    DvsBodyComponent,
    DvsFooterComponent,
    StateButtonComponent,
    UsingStateButtonComponent,
    TemplateRefExampleComponent,
    SecurityComponent,
    ReferenceTemplatesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ContentChildComponent,
    DvsHeaderComponent,
    DvsBodyComponent,
    DvsFooterComponent,
    UsingStateButtonComponent,
    TemplateRefExampleComponent,
    SecurityComponent,
    ReferenceTemplatesComponent
  ]
})
export class ComponentsModule { }
