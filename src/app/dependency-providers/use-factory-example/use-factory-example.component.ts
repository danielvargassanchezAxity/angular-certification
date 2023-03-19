import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { APP_CONFIG } from 'src/app/config/config.token';
import { Logger } from 'src/app/models/logger.model';
import { ExperimentalLoggerService } from 'src/app/services/experimental-logger.service';
import { LoggerService } from 'src/app/services/logger.service';
export function loggerFactory(injector: Injector): Logger {
  return injector.get(APP_CONFIG).experimentalEnabled ? new ExperimentalLoggerService(injector.get(HttpClient)) : new LoggerService();
}
@Component({
  selector: 'app-use-factory-example',
  templateUrl: './use-factory-example.component.html',
  styleUrls: ['./use-factory-example.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector]
    }
  ]
})
export class UseFactoryExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
