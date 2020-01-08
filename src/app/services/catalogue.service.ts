import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  host = 'http://localhost:8080/produits';
  constructor(private httpClient: HttpClient) {}
  public getProducts() {
    return this.httpClient.get(this.host);
  }
}
