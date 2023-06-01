import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiUrl = environment.apiUrl;

  constructor( private _httpClient : HttpClient ) { }

  getAll() : Observable<Address[]> {
    console.log(this._httpClient.get<Address[]>(this.apiUrl));
    
    return this._httpClient.get<Address[]>(this.apiUrl);
    //httpClient.get(url, options)
  }

  getById(id : number) : Observable<Address>{
    return this._httpClient.get<Address>(this.apiUrl+id)
  }

  create(AddressToAdd : Address) : Observable<Address>{
    return this._httpClient.post<Address>(this.apiUrl, AddressToAdd)
    //httpClient.post(url, body, options)
  }

  update(id : number, AddressToUpdate : Address) : Observable<any>{
    return this._httpClient.put(this.apiUrl+id, AddressToUpdate)
    //httpClient.put(url, body, options)
  }

  delete(id : number) : Observable<any> {
    return this._httpClient.delete(this.apiUrl+id)
    //httpClient.delete(url, options)
  }
}
