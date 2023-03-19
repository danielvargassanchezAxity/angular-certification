import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { DependencyProvidersModule } from './dependency-providers/dependency-providers.module';
import { interval, take } from 'rxjs';
import { TrackbyModule } from './trackby/trackby.module';

function initializeApp() {
  return interval(2000).pipe(take(1));
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DependencyProvidersModule,
    TrackbyModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
