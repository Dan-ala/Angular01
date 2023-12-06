import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
constructor(public router:Router){
}

searchBarFilter: any = {
value: ''
}

ngOnInit() {
  this.searchBar();
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

searchBar(){
  const professions = [{
    id: 1,
    img: "../assets/img/driver.jpg",
    title: "Profesión",
    name: "Driver",
    url: "../assets/img/driver.jpg"
  },
{
  id: 2,
  img: "../assets/img/doctor.jpg",
  title: "Profesión",
  name: "Doctor",
  url: "../assets/img/doctor.jpg"
},
{
  id: 3,
  img: "../assets/img/engineer.jpg",
  title: "Profesión",
  name: "Engineer",
  url: "../assets/img/engineer.jpg"
},
{
  id: 4,
  img: "../assets/img/journalist.jpg",
  title: "Profesión",
  name: "Journalist",
  url: "../assets/img/journalist.jpg"
},
{  id: 5,
  img: "../assets/img/teacher.jpg",
  title: "Profesión",
  name: "Teacher",
  url: "../assets/img/teacher.jpg"
},
{  id: 6,
  img: "https://imageio.forbes.com/specials-images/imageserve/637b9c82c951b6abb2817eec/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  title: "Profesión",
  name: "Pilot",
  url: "https://imageio.forbes.com/specials-images/imageserve/637b9c82c951b6abb2817eec/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
},]

  let search_bx2 = document.getElementsByClassName('search_bx2')[0]

    professions.forEach(element => {
      const {img, title, name, url} = element
      let card = document.createElement('a')
      card.href = url
      card.innerHTML = `<img src="${img}" alt="${name}" class="driver" style="width: 92px; height: 48.8px;">
      <div class="content2" style="color: #000000;">
        <h6 style="font-size: 13px; margin-left: 50%;">${title}</h6>
        <p style="color: purple; font-size: 11px; margin-left: 50%;">${name}</p>
      </div>`;
      search_bx2.appendChild(card)
    });

  let search = document.getElementById('search')
  search?.addEventListener('keyup',()=>{
    let filter = this.searchBarFilter.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a')
    for (let i = 0; i < a.length; i++) {
      let b = a[i].getElementsByClassName('content2')[0]
      let c = b.getElementsByTagName('p')[0]
      let textValue = c.textContent || c.innerText
      if (textValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.display= '';
        (search_bx2 as HTMLElement).style.visibility = "visible";
        (search_bx2 as HTMLElement).style.opacity = '1';
      }else{
        a[i].style.display= 'none'
      }

      if(this.searchBarFilter.value == 0){
        (search_bx2 as HTMLElement).style.visibility = "hidden";
        (search_bx2 as HTMLElement).style.opacity = '0';
      }
    }
  })
}

goToDriver(){
  this.router.navigateByUrl('/driver')
}

goToDoctor(){
  this.router.navigateByUrl('/doctor')
}
}
