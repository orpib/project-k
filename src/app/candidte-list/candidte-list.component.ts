import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateInfoService } from '../../services/candidate-info.service';
import { Icandidate } from '../../models/i-candiate';


@Component({
  selector: 'app-candidte-list',
  templateUrl: './candidte-list.component.html',
  styleUrls: ['./candidte-list.component.css']
})
export class CandidteListComponent implements OnInit {

  constructor(
    private candidateInfoService : CandidateInfoService
  ) { }
  candidateData: Icandidate[] =this.candidateInfoService.getCandidateList()
  displayedColumns: string[] = ['Name', 'Email', 'PorfileInfo','CV', 'Applications'];
  spinner:boolean= true
  dataSource : Icandidate[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = false;
      this.dataSource = this.candidateData;            
    }, 500);
  }

}
