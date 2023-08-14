import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {
  private api_URL = 'https://api.exchangerate.host/latest?base=ARS&symbols=USD,EUR,BRL,GBP,JPY';

  constructor(private http: HttpClient) {}

  getExchangeRates() {
    return this.http.get(this.api_URL);
  }
}
