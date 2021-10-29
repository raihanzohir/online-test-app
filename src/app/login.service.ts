//define, what'll be used later on
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// @Injectable decorator (function that augments a piece of code) 
// tells Angular that this service will be available everywhere
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // contains namespace and type; 
  //shortcut for: constructor(http: HttpClient){this.http = http;}
  constructor(private http: HttpClient) {
  }

}
