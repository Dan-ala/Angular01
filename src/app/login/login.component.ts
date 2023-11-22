import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  lulo = {
    username: '',
    password: '',
  }
constructor(public router:Router){}

  onSignIn() {
    const userDataString = localStorage.getItem('users');
    if (userDataString) {
        const users = JSON.parse(userDataString);

        if(this.lulo.username == '' && this.lulo.password == ''){
          Swal.fire({
            title: `Fields empty`,
            icon: "error"
          });

        }else if(this.lulo.username == null || this.lulo.username == undefined || this.lulo.username == ''){
          Swal.fire({
            title: `Field username empty`,
            icon: "info"
          });

        } else if(this.lulo.password == null || this.lulo.password == undefined || this.lulo.password == ''){
          Swal.fire({
            title: `Field password empty`,
            icon: "info"
          });

        }
        else if (users.length > 0) {
            const userFound = users.some((user: any) => 
            this.lulo.username === user.username && this.lulo.password === user.password);

            if (userFound) {
                alert(`Welcome ${this.lulo.username}`);
                this.router.navigateByUrl('/dashboard')
            }else {
                alert('Incorrect username or password or does not exist');
                this.router.navigateByUrl('/signup')
            }
        }else {
            alert('User array is empty');
        }
    }
}

goToSignUp(){
  this.router.navigateByUrl('/signup')
}
}
