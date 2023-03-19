import { Injectable } from '@angular/core';
import { Logger } from '../models/logger.model';
import { LoggerMulti } from '../config/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger, LoggerMulti {

  prefix = 'Logger Service'
  constructor() { }

  log(message: string): void {
    console.log(`${message} from ${this.prefix}`);
  }
}
