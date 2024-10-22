import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  standalone: true,
  selector: 'app-security-emergency-list',
  templateUrl: './security-emergency-list.page.html', // Asegúrate de que apunta al archivo correcto
  styleUrls: ['./security-emergency-list.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class SecurityEmergencyListPage {
  emergencies: { location: string; attended: boolean }[] = [];
  emergencySubscription: Subscription;

  constructor(private notificationService: NotificationService) {
    // Suscribirse para obtener las emergencias
    this.emergencySubscription = this.notificationService.getEmergencies().subscribe((data) => {
      this.emergencies = data;
    });
  }

  // Marcar emergencia como atendida
  attendEmergency(index: number) {
    this.emergencies[index].attended = true;
    console.log(`Emergencia en ${this.emergencies[index].location} atendida.`);
  }

  ngOnDestroy() {
    if (this.emergencySubscription) {
      this.emergencySubscription.unsubscribe();
    }
  }
}
