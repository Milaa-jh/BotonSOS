import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  standalone: true,
  selector: 'app-user-chat',
  templateUrl: './user-chat.page.html',
  styleUrls: ['./user-chat.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule], // Agregar FormsModule a imports
})
export class UserChatPage {
  message: string = '';
  messages: { sender: string; message: string }[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe((msgs) => {
      this.messages = msgs;
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage('usuario', this.message);
      this.message = '';
    }
  }
}
