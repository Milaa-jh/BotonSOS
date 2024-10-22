import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private emergencies: { location: string; attended: boolean }[] = [
    { location: 'Piso 1', attended: false },
    { location: 'Piso 2', attended: false },
  ];

  constructor() {}

  // Este método retorna un Observable del array de emergencias
  getEmergencies(): Observable<{ location: string; attended: boolean }[]> {
    return of(this.emergencies); // Retornamos un Observable del array
  }
}
