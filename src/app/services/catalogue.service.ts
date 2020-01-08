import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  host = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}
  public getProducts(size: number, page: number) {
    return this.httpClient.get(
      this.host + '/produits?size=' + size + '&&page=' + page
    );
  }
}
