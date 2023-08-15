import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user = {
    email: '',
    password: '',
  }

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, private alert: AlertController){ }

  ngOnInit() {}

  goToRegister(){
    this.router.navigate(['/register']);
  }

  async presentAlert() {
    const alert = await this.alert.create({
      backdropDismiss: false,
      header: 'Error de validación',
      subHeader: '',
      message: 'Los datos ingresados no son correctos',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async logUserIn(){
    try{
    const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
    const user = userCredential.user;

    if(user){
        this.router.navigate(['/home']);
      }
    }
    catch(error) {
      this.presentAlert();
    }
  }
}
