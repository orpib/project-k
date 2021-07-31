import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { CandidteListComponent } from './candidte-list/candidte-list.component';
import { JobDetalsComponent } from './job-detals/job-detals.component';
import { JobListComponent } from './job-list/job-list.component';
import { MatchingComponent } from './matching/matching.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/job-list',
    pathMatch:"full",
  },
  {
    path:'candidate-infos',
    component: CandidateInfoComponent
  },
  {
    path:'job-details',
    component: JobDetalsComponent
  },
  {
    path:'candidate-list',
    component: CandidteListComponent
  },
  {
    path:'job-list',
    component: JobListComponent
  } ,
  {
    path:'matching',
    component:MatchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
