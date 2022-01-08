import { Injectable } from '@angular/core';
import { User } from './user';
import { Message } from './message';
import { HttpServiceInterface } from './interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = "/api"

@Injectable({
  providedIn: 'root'
})  
export class HttpServiceNode implements HttpServiceInterface {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginUserData: User = null; 

  constructor(private httpClient: HttpClient) {}

  changedLoginState(state: boolean) {
    this.loggedIn.next(state)
  }

  // Funkcja umożliwiająca logowanie
  login(user_name: string, user_password: string) {
    return this.httpClient.post("/api/login/", {
      "user_name": user_name,
      "user_password": user_password
    });
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
            new User(1, "user_name_1", true),
            new User(2, "user_name_2", true),
        ]
    })
  }

  getMessages(id: number){
      switch(id) {
          case 1:
            return of({
                data: [
                    new Message(0, "1 to 0, hello"),
                    new Message(1, "0 to 1, hello"),
                ]
            })
        case 2:
            return of({
                data: [
                    new Message(0, "2 to 0, hello"),
                    new Message(2, "0 to 2, hello"),
                ]
            })
      }
  }

  sendMessages(mes: Message){
    return of({})
  }
  // Setter ustawiający wartość w polu loginUserData
  set user(user: User) {
    this.loginUserData = user;
  }  
}
