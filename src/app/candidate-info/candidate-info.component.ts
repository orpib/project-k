import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {

  constructor() { }
  candidateInfo = new FormGroup({
    name: new FormControl(''),
    phoneNo: new FormControl(''),
    preferredJobArea: new FormControl(''),
    email: new FormControl(''),
    candidateDetails: new FormControl('')
  });

  ngOnInit(): void {
  }

}
