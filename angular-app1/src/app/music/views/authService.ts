import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user:string, password:string): boolean{
    if(user === 'user' && password === '123456'){
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
  redirectUrl:string;
  logout():void{
    localStorage.removeItem('username');
  }
  getUser():string{
    return localStorage.getItem('username');
  }
  isLoggedIn():boolean{
    return this.getUser() !== null;
  }
}
// export var AUTH_PROVIDERS: Array<any> = [
//   {provide:AuthService, useClass: AuthService}
// ]