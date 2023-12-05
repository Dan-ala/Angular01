import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  companies: any = [];

  newCompany: any = {
    companyName: '',
    city: '',
    wages: '',
    requirement: '',
    typeOfEmployment: '',
    postedDate: '',
    companyImgUrl: ''
  };

  constructor(public router: Router) {}

  ngOnInit() {
    const storedCompanies = localStorage.getItem('c');

    if (storedCompanies) {
      this.companies = JSON.parse(storedCompanies);
    }
  }

  goToSignIn() {
    this.router.navigateByUrl('/');
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.newCompany.companyImgUrl = imageUrl;
    }
  }

  newCompanyForm() {
    this.companies.push(this.newCompany);
    localStorage.setItem('c', JSON.stringify(this.companies));
    Swal.fire({
      title: 'Company created!',
      icon: 'success'
    });

    this.newCompany = {
      companyName: '',
      city: '',
      wages: '',
      requirement: '',
      typeOfEmployment: '',
      postedDate: '',
      companyImgUrl: ''
    };
  }
}
