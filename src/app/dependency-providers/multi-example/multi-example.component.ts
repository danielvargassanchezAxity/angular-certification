import { Component, Inject, OnInit } from '@angular/core';
import { LOGGERS, LoggerMulti } from 'src/app/config/logger';
import { ExperimentalLoggerService } from 'src/app/services/experimental-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-multi-example',
  templateUrl: './multi-example.component.html',
  styleUrls: ['./multi-example.component.scss'],
  providers: [
    { provide: LOGGERS, useClass: ExperimentalLoggerService, multi: true },
    { provide: LOGGERS, useExisting: LoggerService, multi: true }
  ]
})
export class MultiExampleComponent implements OnInit {

  constructor(@Inject(LOGGERS) private loggers: ReadonlyArray<LoggerMulti>) { }

  ngOnInit(): void {
    this.loggers.forEach((logger) => logger.log("hey from multi"));
  }

}
