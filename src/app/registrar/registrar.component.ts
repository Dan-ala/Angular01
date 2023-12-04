import { Router } from '@angular/router';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(public router:Router){}

  users : any = []

  userSignUpObject: any = {
    username: '',
    email: '',
    password: '',
  }


  onSignUp(){

    const userData = localStorage.getItem('users');
    const u = JSON.stringify(userData)
    const uP = JSON.parse(u)


    if(this.userSignUpObject.username == '' && this.userSignUpObject.email == '' && this.userSignUpObject.password == ''){
      Swal.fire({
        title: "Fields empty",
        icon: "error"
      });
    }else if(!this.userSignUpObject.username == null || this.userSignUpObject.username == undefined || this.userSignUpObject.username == ''){
      Swal.fire({
        title: "Username field empty",
        icon: "info"
      });
    }else if(!this.userSignUpObject.email == null || this.userSignUpObject.email == undefined || this.userSignUpObject.email == ''){
      Swal.fire({
        title: "Email field empty",
        icon: "info"
      });
    }else if(!this.userSignUpObject.password == null || this.userSignUpObject.password == undefined || this.userSignUpObject.password == ''){
      Swal.fire({
        title: "Password field empty",
        icon: "info"
      });
    }else if (this.userSignUpObject == uP) {
        Swal.fire({
          title: "The user already exists!",
          icon: "error"
        });
    }else{
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
    console.log(uP)
    console.log(this.userSignUpObject)
  }

  goToSignIn(){
    this.router.navigateByUrl('/')
  }

}
