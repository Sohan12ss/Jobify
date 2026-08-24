import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Navbar } from '../../component/navbar/navbar';
import { ServiceJob } from '../../services/job';

@Component({
  selector: 'app-edit-job',
  imports: [FormsModule, Navbar],
  templateUrl: './edit-job.html',
  styleUrl: './edit-job.css',
})
export class EditJob implements OnInit {

  activepage: string = 'edit-job';

  jobId: number = 0;

  title: string = '';
  company: string = '';
  location: string = '';
  salary: string = '';
  jobtype: string = '';
  description: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: ServiceJob,
    private router: Router
  ) {}

  ngOnInit(): void {

    // Get ID from URL
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID from URL:', id);

    if (!id) {
      console.error('No job ID found in URL');
      return;
    }

    this.jobId = Number(id);

    console.log('Job ID:', this.jobId);

    // Get job from backend
    this.service.getJob(this.jobId).subscribe({
      
      next: (job) => {

        console.log('Job received from backend:', job);

        this.title = job.title;
        this.company = job.company;
        this.location = job.location;
        this.salary = job.salary;
        this.jobtype = job.type;
        this.description = job.description;

        console.log('Title:', this.title);
        console.log('Company:', this.company);
      },

      error: (error) => {
        console.error('GET JOB ERROR:', error);
      }
    });
  }

  cancelupdate(): void {
    this.router.navigate(['/dashboard']);
  }

  updatejob(): void {

    const updatedJob = {
      title: this.title,
      company: this.company,
      location: this.location,
      type: this.jobtype,
      salary: this.salary,
      description: this.description
    };

    console.log('Sending update:', updatedJob);

    this.service.updateJob(this.jobId, updatedJob).subscribe({

      next: (response) => {
        console.log('Updated successfully:', response);
        alert('Job updated successfully');
        this.router.navigate(['/dashboard']);
      },

      error: (error) => {
        console.error('UPDATE ERROR:', error);
      }

    });
  }
}