import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-security-map',
  templateUrl: './security-map.page.html',
  styleUrls: ['./security-map.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class SecurityMapPage implements OnInit {
  constructor() {}

  ngOnInit() {
    // Aquí iría la lógica para cargar el mapa y mostrar la ubicación en tiempo real
  }
}
