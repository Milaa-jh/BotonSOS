import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatSubject = new BehaviorSubject<{ sender: string; message: string }[]>([]);

  getMessages() {
    return this.chatSubject.asObservable();
  }

  sendMessage(sender: string, message: string) {
    const currentMessages = this.chatSubject.getValue();
    this.chatSubject.next([...currentMessages, { sender, message }]);
  }
}
