
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Ijob } from 'src/models/i-job';
import { CandidateInfoService } from 'src/services/candidate-info.service';
import { JobInfoService } from 'src/services/job-info.service';
import { Icandidate } from '../../models/i-candiate';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private candidateService: CandidateInfoService,
    private activatedRoute: ActivatedRoute,
    private jobService: JobInfoService) { }

  matchingForm = new FormGroup({
    title: new FormControl(''),
    mustHave: new FormControl(''),
    jobDescriptioin: new FormControl('')
  });

  showCandidateBtn: boolean = false;
  spinner: boolean = true
  candidateData: Icandidate[] = this.candidateService.getCandidateList()
  displayedColumns: string[] = ['Name', 'Email', 'PorfileInfo','CV', 'Match', 'Applications'];
 
  job:any
  dataSource: Icandidate[] = []

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const jobId = params['jobId'];
      console.log(jobId);
      this.job = this.jobService.getJob(jobId);
      this.matchingForm.get('mustHave')?.patchValue(this.job.MustHave);
      this.matchingForm.get('jobDescriptioin')?.patchValue(this.job.Description);
      this.getMatches();
    });
  }

  getMatches() {
    let matchedCandidates: Icandidate[] = []
    if (!this.matchingForm.get('jobDescriptioin')?.value || !this.matchingForm.get('mustHave')?.value) {
      this.openSnackBar("Please complete job description")
      return;
    }
    this.candidateData.forEach(candidate => {
      let mustHaves = this.checkForMustHave(candidate, this.matchingForm.get('mustHave')?.value);
      if (mustHaves) {
        candidate.Match = 50 + (this.checkSimilarity(this.matchingForm.get('jobDescriptioin')?.value, candidate.PorfileInfo +" "+candidate?.EXtractedCv) / 2)
        matchedCandidates.push(candidate);
      }
    });
    matchedCandidates.sort((a, b) => b.Applications - a.Applications);
this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
      this.dataSource = matchedCandidates;
      console.table(matchedCandidates)
      if (matchedCandidates.length === 0) {
        this.showCandidateBtn = true;
        this.openSnackBar("No matching candidates found!");
      } else {
        this.showCandidateBtn = false;
      }
    }, 500);


  }

  getRandomArbitrary(min: number, max: number) {
    let rand = Math.random() * (max - min) + min;
    return parseInt(rand.toString());
  }

  wordCountMap(str: any) {
    let words = str.split(' ');
    let wordCount: any = {};
    words.forEach((w: any) => {
      wordCount[w] = (wordCount[w] || 0) + 1;

    });
    return wordCount;
  }

  addWordsToDictionary(wordCountmap: any, dict: any) {
    for (let key in wordCountmap) {
      dict[key] = true;
    }
  }

  wordMapToVector(map: any, dict: any) {
    let wordCountVector = [];
    for (let term in dict) {
      wordCountVector.push(map[term] || 0);
    }
    return wordCountVector;
  }

  dotProduct(vecA: any, vecB: any) {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
      product += vecA[i] * vecB[i];
    }
    return product;
  }

  magnitude(vec: any) {
    let sum = 0;
    for (let i = 0; i < vec.length; i++) {
      sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum);
  }

  cosineSimilarity(vecA: any, vecB: any) {
    return this.dotProduct(vecA, vecB) / (this.magnitude(vecA) * this.magnitude(vecB));
  }

  textCosineSimilarity(txtA: any, txtB: any) {
    const wordCountA = this.wordCountMap(txtA);
    const wordCountB = this.wordCountMap(txtB);
    let dict = {};
    this.addWordsToDictionary(wordCountA, dict);
    this.addWordsToDictionary(wordCountB, dict);
    const vectorA = this.wordMapToVector(wordCountA, dict);
    const vectorB = this.wordMapToVector(wordCountB, dict);
    return this.cosineSimilarity(vectorA, vectorB);
  }

  getSimilarityScore(val: any) {
    return Math.round(val * 100)
  }

  checkSimilarity(ref: any, target: any) {
    debugger
    return this.getSimilarityScore(this.textCosineSimilarity(ref, target));
  }

  checkForMustHave(candidate: Icandidate, value: string) {
    let mustHaves = value.split(',');
    let allMustHaves = true;
    mustHaves.forEach(musthave => {
      let profileAndCv = candidate?.EXtractedCv+' '+candidate.PorfileInfo
      if (!profileAndCv.toLocaleLowerCase().match(musthave.toLocaleLowerCase().trim())) {
        allMustHaves = false;
      }
    });
    return allMustHaves;
  }

  goToCandidateList() {
    this.dataSource = this.candidateData;
    this.showCandidateBtn = false;
    this.matchingForm.reset();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "close", { duration: 1500 });
  }
}

