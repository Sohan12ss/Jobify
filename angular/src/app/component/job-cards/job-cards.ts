import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceJob } from '../../services/job'; // Adjust the path if needed

@Component({
  selector: 'app-job-cards',
  standalone: true,
  imports: [],
  templateUrl: './job-cards.html',
  styleUrls: ['./job-cards.css'],
})
export class JobCards {

  @Input() job: any;

  constructor(
    private router: Router,
    private service: ServiceJob
  ) {}

  editjob() {
    this.router.navigate(['/edit-job', this.job.id]);
  }

  deletejob() {
    this.service.deleteJob(this.job.id).subscribe(() => {
      alert('Job delete successfully');
      window.location.reload();
    });
  }
}