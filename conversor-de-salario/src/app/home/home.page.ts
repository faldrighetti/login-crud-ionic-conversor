import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];
  base = 'ARS';

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, private http: HttpClient){}

  salary: number = 0;
  results: number = 0;
  exchangeRates: any = {};

  convertSalaries() {
    const apiUrl = 'https://api.exchangerate.host/latest?base=ARS&symbols=USD,EUR,BRL,GBP,JPY';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.exchangeRates = data.rates;
    });
  }

  signOut(){
    this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
