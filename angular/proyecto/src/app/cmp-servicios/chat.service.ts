import { Injectable, EventEmitter } from '@angular/core';
import { MensajesConsolaService } from './mensajes-consola.service';
interface IMsg
{
  msg: string;
  user: string;
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
private chat: Array<IMsg> = [
  {msg: 'Bienveido al chat', user: 'A'}
];
enviado = new EventEmitter<string>();
  constructor(private msgConsola: MensajesConsolaService) { }

addMensaje(newMsg: IMsg): void {
  this.chat.push(newMsg);
}
getChat(){
  return this.chat;
}

enviarMD(msg: string): void{
  this.enviado.emit(msg);
}

}
