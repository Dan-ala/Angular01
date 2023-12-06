import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.css']
})
export class JournalistComponent {
  searchBarFilter = {
    value: ''
  }

  companies: any = {
    companyId: 0,
    companyName: '',
    city: '',
    wages: '',
    requirement: '',
    typeOfEmployment: '',
    profession: 'Journalist',
    postedDate: '',
    companyImgUrl: ''
  }

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0

  filteredCompanies: any = []
constructor(public router:Router){
  const storedValue = localStorage.getItem('offfersAppliedJournalist')
  if(storedValue){
    this.numOfOffersApplied = parseInt(storedValue)
  }
}

goToSignIn(){
  this.router.navigateByUrl('/')
}

ngOnInit(){
  const storedCompanies = localStorage.getItem('c')
  if(storedCompanies){
    this.companies = JSON.parse(storedCompanies)
    this.journalistFilter()
  }
  this.numberOfOffers = this.filteredCompanies.length

}

journalistFilter(){
  this.filteredCompanies = this.companies.filter((company: any) => company.profession == 'Journalist')
}

ofertasAplicadas(){
  this.numOfOffersApplied++
  localStorage.setItem('offfersAppliedJournalist',JSON.stringify(this.numOfOffersApplied))
}

countJournalistOffers(){
  this.numberOfOffers = this.companies.filter((company: any) => company.profession === 'Journalist')
}

noPostularse(){
  this.numOfOffersApplied--
  localStorage.setItem('offfersAppliedJournalist',JSON.stringify(this.numOfOffersApplied))
}
}
