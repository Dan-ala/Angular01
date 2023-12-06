import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent{

  companies: any = {
    companyId: 0,
    companyName: '',
    city: '',
    wages: '',
    requirement: '',
    typeOfEmployment: '',
    profession: 'Driver',
    postedDate: '',
    companyImgUrl: ''
  }

  filteredCompanies: any[] = [];
  
  numberOfOffers: any
  numOfOffersApplied: number = 0

constructor(public router:Router){
  const storedValue = localStorage.getItem('OffersAppliedDriver');
  if (storedValue) {
    this.numOfOffersApplied = parseInt(storedValue, 10);
  }
}

searchBarFilter= {
  value: ''
}

ngOnInit() {
  const storedCompanies = localStorage.getItem('c');

  if (storedCompanies) {
    this.companies = JSON.parse(storedCompanies);
    this.filterCompaniesByProfession();
  }
  this.numberOfOffers = this.filteredCompanies.length;
}

filterCompaniesByProfession() {
  this.filteredCompanies = this.companies.filter((company: any) => company.profession === 'Driver');
}

countDriverOffers() {
  this.numberOfOffers = this.companies.filter((company: any) => company.profession === 'Driver').length;
}

goToSignIn(){
  this.router.navigateByUrl('/')
}

ofertasAplicadas(){
  this.numOfOffersApplied++;
  localStorage.setItem('OffersAppliedDriver', JSON.stringify(this.numOfOffersApplied));
}

noPsotularse(){
  this.numOfOffersApplied--;
  localStorage.setItem('OffersAppliedDriver', JSON.stringify(this.numOfOffersApplied));
}
}
