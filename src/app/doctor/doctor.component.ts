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
    wages: '',
    requirement: '',
    typeOfEmployment: '',
    profession: 'Doctor',
    postedDate: '',
    companyImgUrl: ''
  }

  filteredCompanies: any[] = [];
  
  numberOfOffersDoc: any
  numOfOffersApplied: number = 0

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
    this.filterCompaniesByProfession();
  }
  this.numberOfOffersDoc = this.filteredCompanies.length;
}

filterCompaniesByProfession() {
  // Filtrar las empresas por la profesión "Doctor"
  this.filteredCompanies = this.companies.filter((company: any) => company.profession === 'Doctor');
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

