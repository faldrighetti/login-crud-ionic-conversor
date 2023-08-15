import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router, public ngFireAuth: AngularFireAuth, private alert: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(alertHeader: string, alertMessage:string) {
    const alert = await this.alert.create({
      backdropDismiss: false,
      header: alertHeader,
      subHeader: '',
      message: alertMessage,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async register(){
    try{
      const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      const user = userCredential.user;

      if(user){
          this.presentAlert('Bienvenido!', 'Registro exitoso');
          this.router.navigate(['/home']);
        }
      }
    catch(error) {
      this.presentAlert('Error', 'Usuario y/o contraseña inválidos');
    }
  }
}
