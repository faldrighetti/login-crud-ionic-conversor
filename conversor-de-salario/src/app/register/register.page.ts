import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
   
    if(user!.user!.email){
      alert('Registration successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Login failed');  
    }
  }

}
