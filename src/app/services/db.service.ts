import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private _storage: Storage | null = null;
  private isInitialized = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (!this.isInitialized) {
      try {
        this._storage = await this.storage.create();
        this.isInitialized = true;
        console.log('Storage inicializado correctamente');
      } catch (error) {
        console.error('Error al inicializar storage:', error);
        throw new Error('No se pudo inicializar el storage');
      }
    }
  }

  public async register(username: string, password: string): Promise<string> {
    await this.ensureInitialized();
    try {
      const storedUsername = await this._storage?.get('username');
      if (storedUsername) {
        return 'El usuario ya está registrado'; // O el mensaje que prefieras
      } else {
        await this._storage?.set('username', username);
        await this._storage?.set('password', password);
        console.log('Registro exitoso');
        return 'Registro exitoso';
      }
    } catch (error) {
      console.error('Error registrando usuario:', error);
      throw new Error('No se pudo registrar el usuario');
    }
  }

  public async validateCredentials(username: string, password: string): Promise<boolean> {
    await this.ensureInitialized();
    try {
      const storedUsername = await this._storage?.get('username');
      const storedPassword = await this._storage?.get('password');
      return storedUsername === username && storedPassword === password;
    } catch (error) {
      console.error('Error validando credenciales:', error);
      return false;
    }
  }

  private async ensureInitialized() {
    if (!this.isInitialized) {
      await this.init();
    }
    if (!this._storage) {
      throw new Error('Storage no está inicializado');
    }
  }
}
