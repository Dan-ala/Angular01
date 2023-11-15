import { Router } from '@angular/router';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(
    public router:Router
    ){
  
    }

  users: any[] = []
  userSignUpObject: any = {
    username: '',
    email: '',
    password: '',
  }

  
  onSignUp(){
    this.users.push(this.userSignUpObject)
    localStorage.setItem('users', JSON.stringify(this.users))

    Swal.fire({
      title: "User created!",
      icon: "success"
    });

    this.userSignUpObject = {
      username: '',
      email: '',
      password: '',
    }
  }

  goToSignIn(){
    this.router.navigateByUrl('/')
  }

}
