import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/client';
import { Produit } from './models/produit';
import { commandeItem } from './models/commandeItem';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public getCalague(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendCatalogue);
  }

  public getCatalogue(searchTerm?: string): Observable<Produit[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.append('search', searchTerm);
    }

    return this.http.get<Produit[]>(environment.backendCatalogue, { params });
  }

  public registerUser(user: any): Observable<any> {
    return this.http.post(environment.backendUserRegister, user);
  }

  createOrder(userId :any, items : any) {
    return this.http.post(environment.backendOrder, { userId, items });
  }
}
