import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];
  base = 'ARS';

  constructor(private router: Router, public ngFireAuth: AngularFireAuth){}

  salary: number = 0;
  results: number = 0;

  calculateConversion(){
    this.results = this.salary + 10;
    return this.results;
  }

  calculate2(currencies: string){
    for(let i = 0; i < currencies.length; i++){
      //call API
      //Calcular salario * ratio en currencies[i] con base ARS  
      //return resultado
    }
  }

  signOut(){
    this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
