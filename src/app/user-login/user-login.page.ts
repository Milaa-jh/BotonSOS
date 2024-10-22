import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  standalone: true,
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicStorageModule, // Asegúrate de incluir esto
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner
  ]
})
export class UserLoginPage {
  username: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private dbService: DbService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (!this.username || !this.password) {
      await this.showAlert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    try {
      this.isLoading = true;
      const isValid = await this.dbService.validateCredentials(this.username, this.password);
      
      if (isValid) {
        await this.router.navigateByUrl('/user-home');
      } else {
        await this.showAlert('Error', 'Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error en login:', error);
      await this.showAlert('Error', 'Ocurrió un error durante el inicio de sesión.');
    } finally {
      this.isLoading = false;
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
