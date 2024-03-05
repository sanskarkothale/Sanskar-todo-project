import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): any[] {
    throw new Error('Method not implemented.');
  }
  private registrationDataSubject = new BehaviorSubject<any>(null);
  registrationData$ = this.registrationDataSubject.asObservable();

  constructor() {}
  
  setRegistrationData(registrationData: any): void {
    this.registrationDataSubject.next(registrationData);
  }
}
