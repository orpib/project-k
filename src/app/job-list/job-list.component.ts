import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ijob } from '../../models/i-job';
import { Icandidate } from '../../models/i-candiate';
import { JobInfoService } from 'src/services/job-info.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(
    private jobInfoService : JobInfoService
  ) { }  

  displayedColumns: string[] = ['Title', 'CompanyName', 'Owner', 'Description','Industry',  'MustHave', 'Match' ];
  spinner: boolean = true
  dataSource : Ijob[]=[];
  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = false;
      this.dataSource = this.jobInfoService.getJobList();          
    }, 500);
  }

}
