import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UseClassExampleComponent } from './use-class-example/use-class-example.component';
import { UseExistingExampleComponent } from './use-existing-example/use-existing-example.component';
import { UseFactoryExampleComponent } from './use-factory-example/use-factory-example.component';
import { MultiExampleComponent } from './multi-example/multi-example.component';



@NgModule({
  declarations: [
    UseClassExampleComponent,
    UseExistingExampleComponent,
    UseFactoryExampleComponent,
    MultiExampleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [UseClassExampleComponent,
    UseExistingExampleComponent,
    UseFactoryExampleComponent,
    MultiExampleComponent]
})
export class DependencyProvidersModule { }
