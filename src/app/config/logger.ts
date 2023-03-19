import { InjectionToken } from "@angular/core";

export interface LoggerMulti {
    log: (message: string) => void;
}
export const LOGGERS = new InjectionToken<LoggerMulti>('loggers');