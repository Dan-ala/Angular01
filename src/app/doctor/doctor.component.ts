import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  companies: any = {
    companyId: 0,
    companyName: '',
    city: '',
    wages: 0,
    requirement: '',
    typeOfEmployment: '',
    profession: 'Doctor',
    postedDate: '',
    companyImgUrl: ''
  }

  filteredCompanies: any[] = [];
  filteredCompanies2: any[] = []
  
  numberOfOffersDoc: any
  numOfOffersApplied: number = 0
  numberOfWages: any

constructor(public router:Router){
  const storedValue = localStorage.getItem('OffersAppliedDoctor');
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
    this.filterCompaniesByWages()
  }
  this.numberOfOffersDoc = this.filteredCompanies.length;
  this.numberOfWages = this.filteredCompanies2.length
}

filterCompaniesByWages() {
  const profesion = this.filteredCompanies = this.companies.filter((company: any) => company.profession === 'Doctor')
  const uniqueWages = Array.from(new Set(profesion.map((company: any) => company.wages)));
  this.filteredCompanies2 = uniqueWages.map((wage: any) => {
    return {
      wages: wage,
      count: profesion.filter((company: any) => company.wages === wage).length
    };
  });
}

countDoctorOffers() {
  // Contar el número de ofertas para la profesión "Doctor"
  this.numberOfOffersDoc = this.companies.filter((company: any) => company.profession === 'Doctor').length;
}

goToSignIn(){
  this.router.navigateByUrl('/')
}

ofertasAplicadas(){
  this.numOfOffersApplied++;
  localStorage.setItem('OffersAppliedDoctor', JSON.stringify(this.numOfOffersApplied));
}

noPsotularse(){
  this.numOfOffersApplied--;
  localStorage.setItem('OffersAppliedDoctor', JSON.stringify(this.numOfOffersApplied));
}
}

