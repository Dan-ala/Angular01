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
    wages: 0,
    requirement: '',
    typeOfEmployment: '',
    profession: 'Engineer',
    postedDate: '',
    companyImgUrl: ''
  }

  filteredCompanies: any[] = [];
  filteredCompanies2: any[] = []

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0
  numberOfWages: number = 0

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
      this.filterCompaniesByWages()
    }
    this.numberOfOffers = this.filteredCompanies.length;
    this.numberOfWages = this.filteredCompanies2.length;
  }

  filterCompaniesByWages() {
    const profesion = this.filteredCompanies = this.companies.filter((company: any) => company.profession === 'Engineer')
    const uniqueWages = Array.from(new Set(profesion.map((company: any) => company.wages)));
    this.filteredCompanies2 = uniqueWages.map((wage: any) => {
      return {
        wages: wage,
        count: profesion.filter((company: any) => company.wages === wage).length
      };
    });
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
