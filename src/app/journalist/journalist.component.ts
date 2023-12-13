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
    wages: 0,
    requirement: '',
    typeOfEmployment: '',
    profession: 'Journalist',
    postedDate: '',
    companyImgUrl: ''
  }

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0
  numberOfWages: any

  filteredCompanies: any = []
  filteredCompanies2: any[] = []
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
    this.filterCompaniesByWages()
  }
  this.numberOfOffers = this.filteredCompanies.length
  this.numberOfWages = this.filteredCompanies2.length
}

filterCompaniesByWages() {
  const profesion = this.filteredCompanies = this.companies.filter((company: any) => company.profession === 'Journalist')
  const uniqueWages = Array.from(new Set(profesion.map((company: any) => company.wages)));
  this.filteredCompanies2 = uniqueWages.map((wage: any) => {
    return {
      wages: wage,
      count: profesion.filter((company: any) => company.wages === wage).length
    };
  });
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
