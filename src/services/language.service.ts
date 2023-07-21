import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  constructor(private http : HttpClient) { }

  setlanguage(language : string){
    localStorage.setItem('language',language);
  }
  getlanguage(){
    return localStorage.getItem('language');
  }
  form(data : any ){
    return this.http.post<any>('./assets/php/contact.php',data);
  }
}
