import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../component/navbar/navbar';
import { JobCards } from '../../component/job-cards/job-cards';
import { ServiceJob } from '../../services/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    Navbar,
    JobCards,
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  jobs: any[] = [];
  totalJobs=0;
  activeJobs=0;
  companies=0;
  recentJobs: any[]=[];

  constructor(private services: ServiceJob) {}

  ngOnInit(): void {

    console.log('Dashboard loaded');

    this.services.getJobs().subscribe({
      next: (data: any[]) => {

        console.log('API DATA:', data);
        console.log('API DATA LENGTH:', data.length);

        this.jobs = data;

        console.log('JOBS AFTER ASSIGNMENT:', this.jobs);
        console.log('JOBS LENGTH AFTER ASSIGNMENT:', this.jobs.length);
        this.totalJobs = this.jobs.length;
        this.activeJobs = this.jobs.length;
        this.companies = new Set(
        this.jobs.map(job => job.company)
      ).size;
      this.recentJobs = [...this.jobs]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        )
        .slice(0, 5);

      },

      error: (error) => {
        console.error('API ERROR:', error);
      }
    });
  }
}