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
    companyId: 0,
    companyName: '',
    city: '',
    wages: '',
    requirement: '',
    typeOfEmployment: '',
    postedDate: '',
    companyImgUrl: ''
  };

  selectedCompanyIndex: number | null = null; // Track the index of the selected company for updating

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
    if (this.selectedCompanyIndex !== null) {
      // Update existing company
      this.updateExistingCompany();
    } else {
      // Create new company
      this.createCompany();
    }
  }


    createCompany() {
    this.newCompany.companyId = this.companies.length + 1;
    this.companies.push({ ...this.newCompany });
    localStorage.setItem('c', JSON.stringify(this.companies));

    Swal.fire({
      title: 'Company created!',
      icon: 'success'
    });

    this.resetForm();
  }

    updateExistingCompany() {
    if (this.selectedCompanyIndex !== null) {
      // Update existing company with form values
      this.companies[this.selectedCompanyIndex] = { ...this.newCompany };
      localStorage.setItem('c', JSON.stringify(this.companies));

      Swal.fire({
        title: 'Company updated!',
        icon: 'success'
      });

      this.resetForm();
      this.selectedCompanyIndex = null; // Reset selected index after update
    }
  }

  deleteCompany(index: number) {
    const updatedCompanies = [...this.companies];
    updatedCompanies.splice(index, 1);

    this.companies = updatedCompanies;
    localStorage.setItem('c', JSON.stringify(updatedCompanies));
  }

  onUpdate(index: number) {
    // Set the selected company index for updating
    this.selectedCompanyIndex = index;
  
    // Copy values from the selected company to the form
    const selectedCompany = this.companies[index];
    this.newCompany = { ...selectedCompany };
  }

  private resetForm() {
    this.newCompany = {
      companyId: 0,
      companyName: '',
      city: '',
      wages: '',
      requirement: '',
      typeOfEmployment: '',
      postedDate: '',
      companyImgUrl: ''
    };
  }

  deleteAllCompanies(){
    localStorage.removeItem('c')
  }
}
