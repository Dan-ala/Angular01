import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent {
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
    profession: 'Engineer',
    postedDate: '',
    companyImgUrl: ''
  }

  filteredCompanies: any[] = [];

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0

  constructor(public router:Router){
    const storedValue = localStorage.getItem('OffersAppliedEngineer');
    if (storedValue) {
      this.numOfOffersApplied = parseInt(storedValue, 10);
    }
  }

  goToSignIn(){
    this.router.navigateByUrl('/engineer')
  }

  ngOnInit(){
    const storedCompanies = localStorage.getItem('c')
    if(storedCompanies){
      this.companies = JSON.parse(storedCompanies)
      this.engineerFilter()
    }
    this.numberOfOffers = this.filteredCompanies.length;
  }

  engineerFilter(){
    this.filteredCompanies = this.companies.filter((company: any) => company.profession == 'Engineer')
  }

  countEngineerOffers() {
    this.numberOfOffers = this.companies.filter((company: any) => company.profession === 'Engineer').length;
  }

  ofertasAplicadas(){
    this.numOfOffersApplied++
    localStorage.setItem('OffersAppliedEngineer', JSON.stringify(this.numOfOffersApplied))
  }

  noPostularse(){
    this.numOfOffersApplied--
    localStorage.setItem('OffersAppliedEngineer', JSON.stringify(this.numOfOffersApplied))
  }
}
