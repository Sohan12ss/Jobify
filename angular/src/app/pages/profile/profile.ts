import { Component, OnInit } from '@angular/core';
import { ServiceJob } from '../../services/job';
import { Navbar } from '../../component/navbar/navbar';
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [Navbar,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  editing:boolean=false;
  profile={
    fullName:'Sunny Saini',
    email:'  sunny@gmail.com',
    company:' Workshala',
    phone:'   987652345',
    location:'Ghaziabad, India',
    bio:'     Freelancer and web developer with the great coding and anayltical knowledge'
  };

  totalJobs: number = 0;
  activeJobs: number = 0;
  companies: number = 0;

  jobs: any[] = [];

  constructor(private service: ServiceJob) {}

  ngOnInit(): void {
    const savedProfile = localStorage.getItem('jobifyProfile');
    if(savedProfile){
      this.profile=JSON.parse(savedProfile);}
      this.loadProfileStats();

    
    this.loadProfileStats();
  }
  editProfile():void{
    this.editing=true;
  }
  saveProfile():void{
    localStorage.setItem(
      'jobifyProfile',
      JSON.stringify(this.profile)
    );
    this.editing=false;
  }
  cancelEdit():void{
    const savedProfile=localStorage.getItem('jobifyProfile');
    if(savedProfile){
      this.profile=JSON.parse(savedProfile);
    }
    this.editing=false;
  }

  loadProfileStats(): void {

    this.service.getJobs().subscribe({
      next: (data: any[]) => {

        this.jobs = data;

        // Total jobs
        this.totalJobs = data.length;

        // Active jobs
        this.activeJobs = data.length;

        // Unique companies
        const companyNames = data
          .map(job => job.company)
          .filter(company => company);

        this.companies = new Set(companyNames).size;

      },

      error: (error) => {
        console.error('Error loading jobs:', error);
      }
    });

  }
}