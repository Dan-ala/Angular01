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
            } else {
                alert('Incorrect username or password');
            }
        } else {
            alert('User array is empty');
        }
    } else {
        alert('User does not exist');
    }
}


clic(){
  console.log("helou");
  this.router.navigateByUrl("/registrar")
  
}
}
