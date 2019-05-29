import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // get(arg0: string) {
  //   throw new Error("Method not implemented.");
  // }

  rowData: any;

  constructor() { }
  

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

/*  */
}