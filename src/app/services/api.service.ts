import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ServerUrl:any='http://localhost/rest-api/index.php/api/';
//   constructor(private http: HttpClient) { }
constructor(
public http:HttpClient
){}

  get()
  {
    return 'OK';
  }
}
// constructor() { }}