import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable, BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.InsurnaceBot;
  client: any;
  conversation = new BehaviorSubject<Message[]>([]);


  connectToApi() {
    this.client = new ApiAiClient({ accessToken: this.token });
    const intro = new Message('Hello and Welcome to the Insurance chatbot', 'bot');
    this.update(intro);

  }
// Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }
  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
  constructor() { }
}
