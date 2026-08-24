import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Title } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from '../../component/navbar/navbar';
import { ServiceJob } from '../../services/job';


@Component({
  selector: 'app-add-job',
  imports: [FormsModule,RouterLink,Navbar],
  templateUrl: './add-job.html',
  styleUrl: './add-job.css',
})
export class AddJob { 
  
  constructor(private servicejob:ServiceJob){}


 activepage:string='add-job';
  jobT:string='';
  com:string='';
  loc:string='';
  sal:string='';
  jobType:string='Full-Time';
  des:string='';

alljob:any[]=[];

//validation
newjob={
  title:this.jobT,
  company:this.com,
  location:this.loc,
  salary:this.sal,
  jobtype:this.jobType,
  description:this.des  
};

clearform(){
this.jobT='';
this.com='';
this.loc='';
this.sal='';
this.des=''

}

createjob(){
  if(this.jobT===''||
    this.com===''||
    this.loc===''||
    this.sal===''||
    this.jobType===''||
    this.des===''
  ){
    alert("fills are required")
    return;
  }

const newjob={
  title:this.jobT,
  company:this.com,
  location:this.loc,
  salary:this.sal,
  type:this.jobType,
  description:this.des  

};




this.servicejob.createJob(newjob).subscribe({
  next:(response)=>{
    console.log(response);
    alert("job created successfully");
    this.clearform();
    
  }, 
  
  error: (error) => {
  console.log("Full Error:", error);
  console.log("Status:", error.status);
  console.log("Message:", error.message);
  console.log("Response:", error.error);

  alert(`Status: ${error.status}\n${JSON.stringify(error.error)}`);
}
});  

}
}

