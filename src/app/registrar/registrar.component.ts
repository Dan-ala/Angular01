import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  users: any[] = []
  userSignUpObject: any = {
    username: '',
    email: '',
    password: '',
  }

  
  onSignUp(){
    this.users.push(this.userSignUpObject)
    localStorage.setItem('users', JSON.stringify(this.users))

    this.userSignUpObject = {
      username: '',
      email: '',
      password: '',
    }
  }

}
