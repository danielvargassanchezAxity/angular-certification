import { Component, OnInit } from '@angular/core';
import { ExperimentalLoggerService } from 'src/app/services/experimental-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-use-class-example',
  templateUrl: './use-class-example.component.html',
  styleUrls: ['./use-class-example.component.scss'],
  providers: [
    { provide: LoggerService, useClass: ExperimentalLoggerService } // creara una nueva instancia para cada uno 
  ]
})
export class UseClassExampleComponent implements OnInit {

  constructor(private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService) { }

  ngOnInit(): void {
    this.logger.log("hey");
    if (this.logger) {
      console.log(this.logger === this.experimentalLogger); // retorna true cuando se usa useExisting 
    }
  }

}
