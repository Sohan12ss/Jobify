import { Component, signal } from '@angular/core';
import { FormsModule, NgForm,  } from '@angular/forms';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Navbar } from './component/navbar/navbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddJob } from "./pages/add-job/add-job";
import { EditJob } from './pages/edit-job/edit-job';
import { routes } from './app.routes';
import { JobCards } from './component/job-cards/job-cards';
import { Profile } from './pages/profile/profile';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Dashboard, Login, AddJob, EditJob, RouterOutlet,Navbar, JobCards,Profile], 
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
 
}

  


