import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EditJob } from './pages/edit-job/edit-job';
import { AddJob } from './pages/add-job/add-job';
import { Dashboard } from './pages/dashboard/dashboard';
import { Navbar } from './component/navbar/navbar';
import{Profile } from './pages/profile/profile';

export const routes: Routes = [

{path:'', component:Login},
{path:'dashboard', component:Dashboard},
{path : 'add-job', component:AddJob},
{path:'edit-job/:id', component:EditJob},
{path : 'profile',component:Profile}

];
