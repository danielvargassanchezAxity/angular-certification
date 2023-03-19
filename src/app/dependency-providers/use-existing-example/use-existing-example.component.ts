import { Component, OnInit } from '@angular/core';
import { ExperimentalLoggerService } from 'src/app/services/experimental-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-use-existing-example',
  templateUrl: './use-existing-example.component.html',
  styleUrls: ['./use-existing-example.component.scss'],
  providers: [
    { provide: LoggerService, useExisting: ExperimentalLoggerService } // tomara una instancia ya creada
  ]
})
export class UseExistingExampleComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.loggerService.log("useExisting");
  }

}
