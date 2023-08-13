import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];
 
  salary = '';
  results = this.salary + 10;
  base = 'ARS';

  constructor(){
    this.results = this.results + 10;
  }
  
}
