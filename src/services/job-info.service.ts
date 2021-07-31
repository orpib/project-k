import { Injectable } from '@angular/core';
import { Ijob } from 'src/models/i-job';

@Injectable({
  providedIn: 'root'
})
export class JobInfoService {

  constructor() { }

  jobList : Ijob[]=[
    { Title: "AI Center",  
      Description: "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.", 
      MustHave: "machine learning,data analysis",
      CompanyName:"Transcends",
      Owner:"Jon Matthew",
      Industry:["Machine Learning"] },

    { Title: "Software Engineer gmbh",  
      Description: "We are looking for a skilled software engineer who, along with our excellent software development team, will be responsible for working on projects that are currently being developed on by our company. Duties will include but are not limited to developing and directing software system validation and testing methods, as well as directing our software programming initiatives. You will also be working closely with clients and cross-functional departments to communicate project statuses and proposals. A bachelor's degree in computer science, software engineering, or another related field is required. You will also need at least five to seven years of software engineering or software development experience, preferably in a related field to be successful in this role.", 
      MustHave: "developers, software engineer",
      CompanyName:"Genuin",
      Owner:"Star Lord",
      Industry:["Informatics"] },

    { Title: "HR Dept BDM",  
      Description: "What do professionals in HR careers do? Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. They may also handle employee relations, payroll, benefits, and training. Human resources managers plan, direct and coordinate the administrative functions of an organization", 
      MustHave: "human resource,recruit",
      CompanyName:"GUID",
      Owner:"Steve Rogers",
      Industry:["Informatics","Consulting"] },

    { Title: "Software Engineer JHG",  
      Description: "We are looking for a .Net developer to build software using languages and technologies of the .NET framework. You will create applications from scratch, configure existing systems and provide user support.In this role, you should be able to write functional code with a sharp eye for spotting defects. You should be a team player and excellent communicator. If you are also passionate about the .NET framework and software design/architecture, we’d like to meet you. Your goal will be to work with internal teams to design, develop and maintain software.", 
      MustHave: "ASP.NET, SignalR, Vb.NET, Architect",
      CompanyName:"ALGO",Owner:"Bucky Barnes",Industry:["Informatics"] },

    { Title: "DevOps Engineer FGD",  
      Description: "DevOps Engineer works with developers and the IT staff to oversee the code releases. They are either developers who get interested in deployment and network operations or sysadmins who have a passion for scripting and coding and move into the development side where they can improve the planning of test and deployment.", 
      MustHave: "devops,network",CompanyName:"Avengers",Owner:"Tony Stark",Industry:["Informatics" , "Technology"] }
  ];
  getJobList(){
    return this.jobList;
  }

  getJob(index: any) {
    return this.jobList[index];
  }
  addJob(job:Ijob){
    this.jobList.push(job);
  }
  updateJob(index:any , job:Ijob){
    this.jobList[index] = job;
  }
}
