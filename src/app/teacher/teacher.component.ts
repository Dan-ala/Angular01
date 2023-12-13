import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
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
    profession: 'Teacher',
    postedDate: '',
    companyImgUrl: ''
  }

  numberOfOffers: number = 0
  numOfOffersApplied: number = 0
  numberOfWages: any

  filteredCompanies: any [] = []
  filteredCompanies2: any [] = []
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

  goToSignIn(){
    this.router.navigateByUrl('/')
  }

  filterCompaniesByWages(){
    const profession = this.filteredCompanies = this.companies.filter((c: any) => c.profession === 'Teacher')
    const uniqueWages = Array.from(new Set(profession.map((c: any)=> c.wages)))
    this.filteredCompanies2 = uniqueWages.map((wage: any) =>{
      return{
        wages: wage,
        count: profession.filter((c: any)=> c.wages === wage).length
      }
    })
  }

  ofertasAplicadas(){
    this.numOfOffersApplied++
    localStorage.setItem('offfersAppliedTeacher',JSON.stringify(this.numOfOffersApplied))
  }
  
  countTeacherOffers(){
    this.numberOfOffers = this.companies.filter((company: any) => company.profession === 'Teacher')
  }
  
  noPostularse(){
    this.numOfOffersApplied--
    localStorage.setItem('offfersAppliedTeacher',JSON.stringify(this.numOfOffersApplied))
  }
}
