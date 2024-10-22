import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  standalone: true,
  selector: 'app-security-chat',
  templateUrl: './security-chat.page.html',
  styleUrls: ['./security-chat.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule], // Agregar FormsModule a imports
})
export class SecurityChatPage {
  message: string = '';
  messages: { sender: string; message: string }[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe((msgs) => {
      this.messages = msgs;
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage('seguridad', this.message);
      this.message = '';
    }
  }
}
