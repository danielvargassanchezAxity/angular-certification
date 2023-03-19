import { Injectable } from '@angular/core';
import { Logger } from '../models/logger.model';
import { HttpClient } from '@angular/common/http';
import { LoggerMulti } from '../config/logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger, LoggerMulti {

  prefix = 'Experimental Logger service'
  constructor(private httpClient: HttpClient) { }

  log(message: string): void {
    console.log(`${message} from ${this.prefix}`);
  }
}
