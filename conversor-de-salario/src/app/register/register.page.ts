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

  regexPassword = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{8,20}$/
  //Entre 8 y 20 caracteres, con al menos un número

  validatePassword(password: string){
    if(this.checkPassword(password)){
      this.register()
    } else{
      this.presentAlert('Error', 'Usuario y/o contraseña inválidos');
    }
  }

  checkPassword(password: string): boolean{
    return this.regexPassword.test(password);
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
