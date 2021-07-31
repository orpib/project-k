import { Injectable } from '@angular/core';
import { Icandidate } from 'src/models/i-candiate';

@Injectable({
  providedIn: 'root'
})
export class CandidateInfoService {


  constructor() { }

  candidateList: Icandidate[] = [
    {
      Name: "Jon Doe",
      Email: "doe@doemail.com",
      PorfileInfo: "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.",
      Applications: 2,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/6b7ce00a-1846-3cbc-0db7-1f1e0b7797f6/3923f54b-1849-4236-b817-f9ea1f2f70c2/Jon.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T044607Z&X-Amz-SignedHeaders=host&X-Amz-Signature=057651f28647e994df1adb42a0ad601a2eacf1699db3ffb74a23fd65e989ce93",
      EXtractedCv: "Jon Doe Jon Doe New Orleans, LA, USA Machine Learning Louisiana, United States Specialist +41 442212345 doe@yomail.com ㅡ Skills ● Data and Quantitative Analysis ● Decision Analytics ● Predictive Modeling ● Data-Driven Personalization ● Machine Learning Algorithms ● Organizational and analytical skills ● Understanding of technical documentation ● Communication and presentation ● Problem-solving ㅡ Learrn.IO / Senior Machine Learning Specialist Experience APRIL 20018 - PRESENT, New Orleans Planning and implementing rapid-cycle evaluations to support evidence-based transitions in Tech U content and processes Learrn.IO / Junior Machine Learning Specialist FEBRUARY 2015 - MARCH 2017, New Oeleans Working with the replacement of manual activities with automated ones (e.g., using machine learning and artificialintelligence to compare curricula, automating data collection from residents and customers) Learrn.IO / Intern July 2014 - January 2015 New Oeleans Use a blended learning methodology to roll out continuousdigital learning that supports new, agile ways of workingand just-in-time trainingㅡ Saint May College Education JULY 2012- July 2015,, Ohio Master's Degree Govt. School of Science January 2010 - APRIL 2012, ELMWOOD Bachelor's Degree ㅡ Employee Of the Year (2014). Awards"
    },
    {
      Name: "Jon Snow",
      Email: "snow@mail.com",
      PorfileInfo: "A software engineer is a professional who applies the principles of software engineering for designing, development, maintenance, testing, and evaluation of computer software. In this tutorial, you will learn: ... Best Practices for Software Engineers. Best Practices for Software Developers.",
      Applications: 3,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/497b53d0-5f22-abd7-cb23-341a1b1e49f1/6af9079d-9220-48ec-9398-a4ef58057f18/Snow.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T050042Z&X-Amz-SignedHeaders=host&X-Amz-Signature=415c49612b89f0433d43cebc965d4b00a8721503293846101b04614d5b5ffd16",
      EXtractedCv: "Ohio City, Cleveland, OH, USA +41 3423562365 Jon Snow snow@yopmail.com SOFTWARE ENGINEER EXPERIENCE SKILLS C ,Javascript, C++, International Bank Limited, Ohio—Senior Software HTML, C# Engineer NOVEMBER 2017 - PRESENT AWARDS Project of the semester One Soft, New Orleans— Junior Software Engineer (2013-2) OCTOBER 2014 -OCTOBER 2016 LANGUAGES English Fluent , German Professional EDUCATION Ohio State University, Ohio—Masters’s Degree JULY 2012 - JULY2014 Ohio State College, Ohio— Bachelor’s Degree JANUARY 2010 - JANUARY 2012"
    },
    {
      Name: "Tom Henry",
      Email: "henry@yopmail.com",
      PorfileInfo: "What do professionals in HR careers do? Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. They may also handle employee relations, payroll, benefits, and training. Human resources managers plan, direct and coordinate the administrative functions of an organization",
      Applications: 5,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/3436d320-95e4-0cc5-43ed-eb1c0b767735/9c362014-889a-47a2-b552-195dbbb2c13c/Tom%20Henry.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T050233Z&X-Amz-SignedHeaders=host&X-Amz-Signature=732187f59e6d665e7d9caaadcc3397e777935bb05e746dbd468259bed9ed15c2",
      EXtractedCv: "Tom Henry HR Sydney NSW, Australia (123) 456-7890 henry@example.com SKILLS Work closely with all crew and management employees to teach how to properly and eﬃciently perform their job functions in McDonald's. Teaching is based on FRED instructions. Instruct crew and management on proper customer responses and always making it right. Teachcrew and management on how to be a Brand Ambassador EXPERIENCE HR Dept. Of SomeWay NoWay, Sydney- HR Resource Manager JULY 2018 - PRESENT ● Skills in planning HR department daily/weekly workloadto support HR business priorities ● Ability to read financial reporting and interpretdata ● Knowledge of federal, state and local employment laws ● Skills in recruiting and event organization ● Experience with Office Suite computer and workforce management programs ● Ability to use industry leading people and schedulingsoftware ● Experience leading a team of hourly HR experts including: skills in interviewing, developing, coaching, evaluating andretaining talent EDUCATION The University of Sydney, Sydney- Master’s Degree JANUARY 2014- JANUARY 2018 Learned Train crew and management on safe and respectfulwork place. AWARDS Student of the tear (2016)"
    },
    {
      Name: "Peter Parker",
      Email: "peter.parker@mail.com",
      PorfileInfo: "A software engineer is a professional who applies the principles of software engineering for designing, development, maintenance, testing, and evaluation of computer software. In this tutorial, you will learn: ... Best Practices for Software Engineers. Best Practices for Software Developers.",
      Applications: 3,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/99f9b477-99a5-0dc4-6eb3-a0a0fac04e03/4528b34c-8ce6-4306-99f8-9d8e6a137c3f/Peter.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T045159Z&X-Amz-SignedHeaders=host&X-Amz-Signature=c0ac1ed891ea62634339886755883940939159fd1d9919fac7240786011f04a6",
      EXtractedCv: "Hello I’m Peter Parker Queens, New York City (123) 456-7890 peter.parker@yopmail.com Skills Python , Java, Experience MONTH 20XX - PRESENT Tech Park, Queens- Senior Software Engineer ● Chaos Engineering, so you’ll be involved in our weeklyFailure Friday sessions, where we deliberately break our systems, find weaknesses, andfix them proactively. ● building the right thing: our team has a deep expertisein building components on Kubernetes and includes founding members of the Knativeproject JULY 2010 - DECEMBER 2012 Tech Park, Queens- Software Engineer ● Chaos Engineering, so you’ll be involved in our weeklyFailure Friday sessions, where we deliberately break our systems, find weaknesses, andfix them proactively. ● building the right thing: our team has a deep expertisein building components on Kubernetes and includes founding members of the Knativeproject Education JANUARY 2008 - JANUARY 2010 Empire State University, Queens- Master’s Degree Awards Fresher of the year ( 2012)"
    },
    {
      Name: "Robert Ross", Email: "ross@mail.com",
      PorfileInfo: "DevOps Engineer works with developers and the IT staff to oversee the code releases. They are either developers who get interested in deployment and network operations or sysadmins who have a passion for scripting and coding and move into the development side where they can improve the planning of test and deployment.",
      Applications: 4,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/e96abab5-63fd-989e-57a6-97e421e2a62d/b6c9f160-3f03-4c8e-a181-983f90a98854/Ross.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T045549Z&X-Amz-SignedHeaders=host&X-Amz-Signature=5111c7e79903a91c9f95c7be8263c300a67ef3fb3813acd561b173abfc06f965",
      EXtractedCv: "Toronto, ON, Canada (123) 456-7890 ross@yopmail.com Robert Ross SKILLS Solid understanding of the business impact of automation Experience with Kubernetes and the K8s ecosystem Strong knowledge building development practices like CI/CD, Test Automation and cloud deployments Some combination of the following: Programming skills in Python, Golang, and Bash Infrastructure development and automated testing, e.g. Inspec, Serverspec CI/CD pipeline platform use (GitHub, GitLab, CircleCI, Jenkins) Comfort and direct experience with monitoring, measurement, and dashboarding: Monitoring: Grafana, Automation, Elastic Stack, Prometheus, Splunk EXPERIENCE Lead Company, Vancouver— Release Manager JANUARY 2017 - PRESENT ● Proficient with containerization and cluster management technologies like Docker and Kubernetes ● Able to build tools from scratch when needed ● In-depth knowledge of build/release systems, CI/CDsystems, Jenkins ● Proficient at Linux system administration ● ●IT Service , Hugo Tech , Canada— DevOps Engineer JANUARY 2014 - JANUARY 2016 ● Proficient with containerization and cluster management technologies like Docker and Kubernetes ● Experience with modern web services architectures ● Ability to quickly learn new and existing technologies ● Strong problem solving skills ● EDUCATION University, OHIO— Master’s Degree JULY 2010 - JULY 2014, OHIO AWARDS ● Experienced with Git (2012)"
    },

    {
      Name: "Mark Pfeifer", Email: "pfmark@example.com",
      PorfileInfo: "DevOps Engineer works with developers and the IT staff to oversee the code releases. They are either developers who get interested in deployment and network operations or sysadmins who have a passion for scripting and coding and move into the development side where they can improve the planning of test and deployment.",
      Applications: 4,
      CV: "https://ecap-falcon.s3.eu-central-1.amazonaws.com/59C6CEDB-EA81-44D1-9EBD-C8772A6178B6/d9e6ab94-f500-23ce-7b05-789e7cdc91a0/d33594f4-96b1-407b-ba1f-ef8c3a6da38a/Mark.pdf?X-Amz-Expires=259200&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXJJI56KAGIDVKCH7/20210527/eu-central-1/s3/aws4_request&X-Amz-Date=20210527T052439Z&X-Amz-SignedHeaders=host&X-Amz-Signature=9f39e01e1993b261d561d4aed9cc746d59be3d635246dba8b0aeba5a9c260c0f",
      EXtractedCv: "Mark Pfeifer Mark Pfeifer Ankerstrasse, Zürich Switzerland Creative Director 123.456.7890 pfmark@example.com ㅡ • Impact-oriented McKinsey-trained management consultantand Skills business executive • Effective problem solver, applying sound analyticsand clear/structured conceptual thinking • Skilled people leader and stakeholder manager, bringingout the best in colleagues/clients • Global professional with exposure in Europe, NorthAmerica, Asia, the Middle East, Africa ㅡ Capco, The Capital Markets Company Sàrl (Zurich, Switzerland) Experience Managing Principal, Head of Insurance Since 11/19 Responsible for building insurance practice from scratch(team, offering, client base) Zurich Insurance Company (Zurich, Switzerland) 12/18-02/19 Senior Manager, Member of Executive Staff, InternalConsulting (iCON) ㅡ Syracuse University (Syracuse, New York) / Masterof Science Education Mathematics 06/01-05/02 Universität Ulm (Ulm, Germany) / Diplom in CSE 12/97-11/04 ㅡ Language skills: German (native); English (ﬂuent);French (basic); Additional information Portuguese (learning)"
    },
    {
      Name: "Dmitry Lapshin", Email: "pfmark@example.com",
      PorfileInfo: "DevOps Engineer works with developers and the IT staff to oversee the code releases. They are either developers who get interested in deployment and network operations or sysadmins who have a passion for scripting and coding and move into the development side where they can improve the planning of test and deployment.",
      Applications: 4,
      CV: "",
      EXtractedCv: ""
    },



  ]

  getCandidateList() {
    return this.candidateList;
  }
  getCandidate(index: any) {
    return this.candidateList[index];
  }
  addCandidate(candidate: Icandidate) {
    this.candidateList.push(candidate);
  }
  updateCandidate(index: any, candidate: Icandidate) {
    this.candidateList[index] = candidate;
  }

}
