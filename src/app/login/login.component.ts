import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  lulo = {
    username: '',
    email: '',
    password: '',
  }
constructor(
  public router:Router
  ){

  }

  onSignIn() {
    const userDataString = localStorage.getItem('users');
    if (userDataString) {
        const users = JSON.parse(userDataString);

        if (users.length > 0) {
            const userFound = users.some((user: any) => 
            this.lulo.username === user.username && this.lulo.password === user.password);

            if (userFound) {
                alert(`Welcome ${this.lulo.username}`);
                this.router.navigateByUrl('/dashboard')
            }else {
                alert('Incorrect username or password or does not exist');
                this.router.navigateByUrl('/signup')
            }
        } else {
            alert('User array is empty');
        }
    }
}

goToSignUp(){
  this.router.navigateByUrl('/signup')
}
}
