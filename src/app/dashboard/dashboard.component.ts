import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(public router:Router){
}

next(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide')?.appendChild(items[0])
}

prev(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide')?.prepend(items[items.length - 1])
}

sidebar(){
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector(".my-container");

sidebar?.classList.toggle("active-nav")
container?.classList.toggle("active-conts")
}

goToSignIn(){
  this.router.navigateByUrl('/')
}

}
