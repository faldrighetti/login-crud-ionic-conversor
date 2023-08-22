import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';

interface Currency {
  name: string,
  rate: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, private http: HttpClient){}

  currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];
  base = 'ARS';

  currencies2: Currency[] = [];

  /*
  text: currency.name
  data: {
    action: push
  }
  */

  public actionSheetButtons = [
    {
      text: 'EUR',
      data: {
        action: ''
      },
    },
    {
      text: 'ISK',
      data: {
        action: '',
      },
    },
    {
      text: 'JPY',
      role: '',
      data: {
        action: '',
      },
    },
  ];

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
