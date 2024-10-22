import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-security-login',
  templateUrl: './security-login.page.html',
  styleUrls: ['./security-login.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class SecurityLoginPage {}
