import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent {

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
    profession: 'Pilot',
    postedDate: '',
    companyImgUrl: ''
  }

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0
  numberOfWages: any

  filteredCompanies: any[] = []
  filteredCompanies2: any[] = []
  constructor(public router:Router){}

  ngOnInit(){
    const storedCompanies = localStorage.getItem('c')
    if(storedCompanies){
      this.companies = JSON.parse(storedCompanies)
      this.filterCompaniesByWages()
    }
    this.numberOfOffers = this.filteredCompanies.length
    this.numberOfWages = this.filteredCompanies2.length
  }

  filterCompaniesByWages(){
    const profession = this.filteredCompanies = this.companies.filter((c: any)=> c.profession === 'Pilot')
    const uniqueWages = Array.from(new Set(profession.map((c: any)=>c.wages)))
    this.filteredCompanies2 = uniqueWages.map((wage: any)=>{
      return{
        wages: wage,
        count: profession.filter((c: any)=> c.wages === wage).length
      }
    })
  }

  goToSignIn(){
    this.router.navigateByUrl('/')
  }

  ofertasAplicadas(){
    this.numOfOffersApplied++
    localStorage.setItem('offfersAppliedPilot',JSON.stringify(this.numOfOffersApplied))
  }
  
  countPilotOffers(){
    this.numberOfOffers = this.companies.filter((company: any) => company.profession === 'Pilot')
  }
  
  noPostularse(){
    this.numOfOffersApplied--
    localStorage.setItem('offfersAppliedPilot',JSON.stringify(this.numOfOffersApplied))
  }
}
