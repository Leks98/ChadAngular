import { Injectable } from '@angular/core';
import { User } from './user';
import { Message } from './message';
import { HttpServiceInterface } from './interfaces';
import { of } from 'rxjs';

const URL = "/api"

@Injectable({
  providedIn: 'root'
})  
export class HttpServiceMock implements HttpServiceInterface {
  isLogin: boolean = true;
  loginUserData: User; 

  constructor() { }

  // Funkcja umożliwiająca logowanie
  login(user: User) {
    return of({})
  }

  // Funkcja umożliwiająca wylogowanie
  logout() {
    return of({})
  }

  // Funkcja umożliwiająca rejestrację
  register(user: User) {
    return of({
        register: true
    })
  }

  getUsers(){
    return of({
        data: [
            new User(0, "user_name_0", "", true),
            new User(1, "user_name_1", "", true),
        ]
    })
  }

  getMessages(id: number){
    return of({
        data: [
            new Message(0, "hello0"),
            new Message(1, "hello1"),
        ]
    })
  }

  sendMessages(mes: Message){
    return of({})
  }
  // Setter ustawiający wartość w polu loginUserData
  set user(user: User) {
    this.loginUserData = user;
  }  
}
