import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  getToday(): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getTodayDate():any {
    return new Date();
  }
}
