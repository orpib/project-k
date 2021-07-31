import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-job-detals',
  templateUrl: './job-detals.component.html',
  styleUrls: ['./job-detals.component.css']
})
export class JobDetalsComponent implements OnInit {

  constructor() { }


  jobDeatilsFormGroup = new FormGroup({
    description: new FormControl(''),
    keyowrds: new FormControl(''),
  });


  ngOnInit(): void {
  }

}
