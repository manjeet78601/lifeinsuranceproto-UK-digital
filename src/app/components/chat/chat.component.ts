import { Component, OnInit, Inject, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService, Message } from './../../services/chat.service';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  messages: Observable<Message[]>;
  formValue: string;
  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;

  constructor(
    public chat: ChatService,
    public modalController: ModalController
  ) { }
  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation
      .asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
    this.scrollToBottom();
  }
  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
  closeModal() {
    this.modalController.dismiss();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
