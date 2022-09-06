import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-branch-delete-script-maker',
  templateUrl: './branch-delete-script-maker.component.html',
  styleUrls: ['./branch-delete-script-maker.component.scss']
})
export class BranchDeleteScriptMakerComponent implements OnInit {

  script = '';
  branchNames: string[] = [];
  deleteBranchNames: string[] = [
    'an-116',
    'bug/AN-272',
    'bug/saddam/add-employee',
    'bug/saddam/my-schedule/schedule/design',
    'bugfix/AN-208',
    'bugfix/AN-216',
    'bugfix/AN-315',
    'bugfix/Add-Store',
    'feat/AN-170',
    'feat/AN-185',
    'feat/AN-188',
    'feat/AN-199',
    'feat/AN-200',
    'feat/AN-202-employee-schedule-change-request',
    'feat/AN-205-create-schedule',
    'feat/AN-214',
    'feat/AN-226-employee-directory-availability',
    'feat/AN-274',
    'feat/AN-280',
    'feat/AN-282',
    'feat/AN-297',
    'feat/an-208',
    'feature/AN-128',
    'feature/AN-162',
    'feature/add-department',
    'feature/employee-documents',
    'feature/saddam/shift-planning/list/employee-unavailability',
    'feature/slot-vacant',
    'feature/slot-view',
    'feature/store-view',
    'feedback/Sprint-6',
    'hu/feat/AN-206',
    'hu/feat/AN-207',
    'hu/feat/AN-219',
    'hu/fix/QA_Feedbacks',
    'hu/feat/AN-309',
    'improvement/saddam/my-schedule/schedule',
    'issue/AN-292',
    'refactor',
    'sticky-header',
    'task/AN-122',
    'task/AN-125',
    'task/AN-194',
    'task/AN-197',
    'task/AN-198',
    'task/AN-205',
    'task/AN-212',
    'task/AN-216',
    'task/AN-227',
    'task/AN-241',
    'task/AN-244',
    'task/AN-246',
    'task/AN-259',
    'task/AN-291',
    'task/AN-301',
    'task/AN-304',
    'task/AN-305',
    'task/AN-312',
    'task/AN-313',
    'task/an-94',
    'task/an-96',
    'task/an-99',
    'task/an-103',
    'task/an-119',
    'task/an-123',
    'task/an-131',
    'task/an-181',
    'task/an-183',
    'task/an-182',
    'task/an-225',
    'task/an-242',
    'task/an-277',
    'task/infinite-scroll',
  ];
  constructor() {}

  ngOnInit() {
    this.extractBranchNames();
  }
  extractBranchNames() {
    branches.forEach((b) => {
      this.branchNames.push(b.name);
    });
    console.log(JSON.stringify(this.branchNames));
  }

  storeBranchNames(event: MatCheckboxChange, branchName: string) {
    if (event.checked) {
      this.deleteBranchNames.push(branchName);
      return;
    }
    debugger;
    const index = this.deleteBranchNames.indexOf(branchName);
    this.deleteBranchNames.splice(index, 1);
  }
  prepareScript() {
    console.log('Deleted Branches => ');
    console.log(this.deleteBranchNames);
    this.deleteBranchNames.forEach((b) => {
      const command = `git push origin --delete ${b}`;
      this.script += '<br>' + command;
    });
  }
}

const branches = [
  {
    name: 'an-116',
    target: {
      hash: 'a4ac36310cefb776775020fe6ff21c641520d46a',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/an-116',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/an-116',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/an-116',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bug/AN-272',
    target: {
      hash: '1db73caf68dc369e497e1e50d1179fd99da3e168',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bug/AN-272',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bug/AN-272',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bug/AN-272',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bug/saddam/add-employee',
    target: {
      hash: 'b4cefd0d7affb0d4b9275fb6b4d16966400689c4',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bug/saddam/add-employee',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bug/saddam/add-employee',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bug/saddam/add-employee',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bug/saddam/my-schedule/schedule/design',
    target: {
      hash: 'ee16d8c030452e0b54a45c2306f61a0e3bbc2065',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bug/saddam/my-schedule/schedule/design',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bug/saddam/my-schedule/schedule/design',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bug/saddam/my-schedule/schedule/design',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bugfix/AN-208',
    target: {
      hash: '731c9d1742211368578660ce763255a6d97bbea1',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bugfix/AN-208',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bugfix/AN-208',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bugfix/AN-208',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bugfix/AN-216',
    target: {
      hash: '811ba094230abf88c79e216e79454a1d568674de',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bugfix/AN-216',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bugfix/AN-216',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bugfix/AN-216',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bugfix/AN-315',
    target: {
      hash: 'cd268e803b2ce96a517963c5fbdd776bd7b583e4',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bugfix/AN-315',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bugfix/AN-315',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bugfix/AN-315',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bugfix/Add-Slot',
    target: {
      hash: '07decb34f025295289a59a32c96215e2d2b8acaf',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bugfix/Add-Slot',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bugfix/Add-Slot',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bugfix/Add-Slot',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'bugfix/Add-Store',
    target: {
      hash: '4ad633a6c85acbb191176d2ec9911e88cbcdf1ae',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/bugfix/Add-Store',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/bugfix/Add-Store',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/bugfix/Add-Store',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'dev',
    target: {
      hash: '7b51fa1df76f25fce91cef0a029a65b9cd5665c4',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/dev',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/dev',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/dev',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'dev-az',
    target: {
      hash: 'd76155130cef1cb0a156525e1581e879fa65b9a6',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/dev-az',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/dev-az',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/dev-az',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-93',
    target: {
      hash: 'c4351e8e25d840f4792eddb5e8534e2abc644680',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-93',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-93',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-93',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-123',
    target: {
      hash: '38f299eb2dae4bbdb4230ab73ec33ab29ce10da2',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-123',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-123',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-123',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-170',
    target: {
      hash: '8aa2c17d1db1f37786a18d14178ce05f4dd3968e',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-170',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-170',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-170',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-185',
    target: {
      hash: 'a0a7ea3f139a5ae94c7d0fc518017523f21bb429',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-185',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-185',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-185',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-188',
    target: {
      hash: '48a664b0ff8e484c4700108e8d162fd012fbf8bc',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-188',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-188',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-188',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-199',
    target: {
      hash: '91da77ba9222947887a9ba632a2317fb4ec46f59',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-199',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-199',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-199',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-200',
    target: {
      hash: '5d851290438561c226d038b74d641ab6faea490a',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-200',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-200',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-200',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-202-employee-schedule-change-request',
    target: {
      hash: '0d349b9866214f94f68209c29d8488db28e77b3d',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-202-employee-schedule-change-request',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-202-employee-schedule-change-request',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-202-employee-schedule-change-request',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-205-create-schedule',
    target: {
      hash: '53781943a338972b1a3cfd709375d0d7b68eaa6b',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-205-create-schedule',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-205-create-schedule',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-205-create-schedule',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-214',
    target: {
      hash: '188bdfb6e52c7b820e38629c1016e01cb61d6dd5',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-214',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-214',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-214',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-226-employee-directory-availability',
    target: {
      hash: 'cfefae793bf33f12cd56800e66e99687014f7e7c',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-226-employee-directory-availability',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-226-employee-directory-availability',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-226-employee-directory-availability',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-274',
    target: {
      hash: '97430bf929bca8f602b8f7f2fa9cac23125074a5',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-274',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-274',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-274',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-280',
    target: {
      hash: '85c7660ce7f812951326c9a02ed7b8e8826dfde6',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-280',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-280',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-280',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-282',
    target: {
      hash: '9a06373717ef72039f45a965ae4c08ba6c283d72',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-282',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-282',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-282',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/AN-297',
    target: {
      hash: '849cb1178fef65d6aedb3e540bc63a3272351132',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/AN-297',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/AN-297',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/AN-297',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feat/an-208',
    target: {
      hash: '252d150a3d5214410b7b2e87d8a4c3d1f8416b94',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feat/an-208',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feat/an-208',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feat/an-208',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/AN-128',
    target: {
      hash: '13af13bcf18ce169af3423a76b521720da26ad43',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/AN-128',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/AN-128',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/AN-128',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/AN-162',
    target: {
      hash: 'a4901a860a1102e60f9fe5bbe8b870b37a0c0968',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/AN-162',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/AN-162',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/AN-162',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/EsLint',
    target: {
      hash: 'a9de7ff6ce7e1dda238e4d083f78d9b5fad24b54',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/EsLint',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/EsLint',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/EsLint',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/add-department',
    target: {
      hash: 'b783ea3645c21a7a30eb0ccfe4fab3aaabe5db11',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/add-department',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/add-department',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/add-department',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/employee-documents',
    target: {
      hash: '01a4c7eab6d6d9d2bfc97f04a002021d1d624d0b',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/employee-documents',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/employee-documents',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/employee-documents',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/saddam/shift-planning/list/employee-unavailability',
    target: {
      hash: '1a2d32240d9fdf88d5ef94de09ea0de8704bd224',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/saddam/shift-planning/list/employee-unavailability',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/saddam/shift-planning/list/employee-unavailability',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/saddam/shift-planning/list/employee-unavailability',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/slot-vacant',
    target: {
      hash: 'ff98d4e12bd51057a92157d7459abf814d4d3505',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/slot-vacant',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/slot-vacant',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/slot-vacant',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/slot-view',
    target: {
      hash: 'cc738b3b533ea5c453be8b28f1fe99dcc26a3562',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/slot-view',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/slot-view',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/slot-view',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feature/store-view',
    target: {
      hash: '8aa2c17d1db1f37786a18d14178ce05f4dd3968e',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feature/store-view',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feature/store-view',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feature/store-view',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'feedback/Sprint-6',
    target: {
      hash: '783d39816ed6500bd64997a00a0cd785482d3b83',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/feedback/Sprint-6',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/feedback/Sprint-6',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/feedback/Sprint-6',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'hu/feat/AN-206',
    target: {
      hash: '6f1c6ef8c47daec9510d0681155c81d68c7c59e0',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/hu/feat/AN-206',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/hu/feat/AN-206',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/hu/feat/AN-206',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'hu/feat/AN-207',
    target: {
      hash: '2be51bce2e8aff2d96e753548589e36281f57317',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/hu/feat/AN-207',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/hu/feat/AN-207',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/hu/feat/AN-207',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'hu/feat/AN-219',
    target: {
      hash: '79e75973c0f135019950f8bbe1f15c858f468823',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/hu/feat/AN-219',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/hu/feat/AN-219',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/hu/feat/AN-219',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'hu/feat/AN-309',
    target: {
      hash: '3a171999a40f75877f82a45b4ae6ea9ad97a8993',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/hu/feat/AN-309',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/hu/feat/AN-309',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/hu/feat/AN-309',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'hu/fix/QA_Feedbacks',
    target: {
      hash: 'e20381fa798c3dac568c0dab546497d1e24ef457',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/hu/fix/QA_Feedbacks',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/hu/fix/QA_Feedbacks',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/hu/fix/QA_Feedbacks',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'improvement/saddam/my-schedule/schedule',
    target: {
      hash: '146bbf9c2683ceb7b3297b048c34bdd31a5036d9',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/improvement/saddam/my-schedule/schedule',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/improvement/saddam/my-schedule/schedule',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/improvement/saddam/my-schedule/schedule',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'integrate-vitest',
    target: {
      hash: 'cf2b0980c52d0eda4c34c11d6ff32c4412c58df6',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/integrate-vitest',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/integrate-vitest',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/integrate-vitest',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'issue/AN-292',
    target: {
      hash: 'e2d5d9e62900158d36d0ce43a3c9d6380991812e',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/issue/AN-292',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/issue/AN-292',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/issue/AN-292',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'pre-dev',
    target: {
      hash: '1986b06b068a90b1420f55dd941b6210a983f089',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/pre-dev',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/pre-dev',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/pre-dev',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'refactor',
    target: {
      hash: '2d1111ef242edc61a661d3e8b4d20d2b16352290',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/refactor',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/refactor',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/refactor',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'release',
    target: {
      hash: 'e15556213f29d7d2ec2b6be4400446a7e8a60e91',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/release',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/release',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/release',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'sticky-header',
    target: {
      hash: '3c0f244dcd5b3162b6aafd1b2cdcb66afad2833d',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/sticky-header',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/sticky-header',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/sticky-header',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-122',
    target: {
      hash: 'a3d733914ed36715415edc6ff73ae2c0b6b03d41',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-122',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-122',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-122',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-125',
    target: {
      hash: 'd5e53c2570ce7442d9c32bd7b20d679c8b94e737',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-125',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-125',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-125',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-189',
    target: {
      hash: 'a20a99394f65eae7fa0e58128fb12bf180187b75',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-189',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-189',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-189',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-194',
    target: {
      hash: 'fef4d71ce12e9dfdb2d94ded7b2f0c40c9f6f461',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-194',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-194',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-194',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-197',
    target: {
      hash: 'd5c39c1fd51b2033cf824acc05c97c5a49be7706',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-197',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-197',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-197',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-198',
    target: {
      hash: '0df190f46de7979722e9db2ef87858b1562e0c58',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-198',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-198',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-198',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-205',
    target: {
      hash: '4ccb32ba25e408fba15642296638622ba50fbf58',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-205',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-205',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-205',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-212',
    target: {
      hash: '074dba352e017e813f1d71652a77763d303a1ef3',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-212',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-212',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-212',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-216',
    target: {
      hash: '922c44c32da36b341f24c5fd54952fc88c5c8316',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-216',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-216',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-216',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-227',
    target: {
      hash: '174b6fb0164d6e03c42b66cdeae0de896f3abbd0',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-227',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-227',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-227',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-241',
    target: {
      hash: 'f2807158af7cb78fe0b50b2b1dc96ad36df8165a',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-241',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-241',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-241',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-244',
    target: {
      hash: 'af5e7a17b17572ff14dcd3c896b2928249a93412',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-244',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-244',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-244',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-246',
    target: {
      hash: '321008ac9d140891f09809b857eb612401e83388',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-246',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-246',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-246',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-259',
    target: {
      hash: '1c1b0cc3542f7631a78e653638a4778d730c5b2c',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-259',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-259',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-259',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-291',
    target: {
      hash: 'e64de023c53c8bda6ce64da3f107437b4a01e2eb',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-291',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-291',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-291',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-301',
    target: {
      hash: '65f6cd4e509ecd0763a37b867cc5057ae207084d',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-301',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-301',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-301',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-304',
    target: {
      hash: '2df9adc325077c5eead4d4646b90e1074e312897',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-304',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-304',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-304',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-305',
    target: {
      hash: '2f0f893b9c00e7b30c5c09eb0c5a045b5e968945',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-305',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-305',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-305',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-312',
    target: {
      hash: '10be91e9bda857591e7c1cb0fbfa3ccbe7188449',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-312',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-312',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-312',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/AN-313',
    target: {
      hash: '4f8a69c39e941b2c345f014d0c9961b5d0e7e8d4',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/AN-313',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/AN-313',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/AN-313',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-39',
    target: {
      hash: '666c396d75113b9019cae2bb6e065539e9c8ab45',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-39',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-39',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-39',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-94',
    target: {
      hash: '2e6943d571f3012811656ad1c37a585782c7a3aa',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-94',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-94',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-94',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-96',
    target: {
      hash: 'c66b56f6f25f2f04b1f96a1db06e3dae45214317',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-96',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-96',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-96',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-99',
    target: {
      hash: 'c1e9d4c484e969a8bcee1c859d76d9d5b59bc87e',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-99',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-99',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-99',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-103',
    target: {
      hash: '486de6eedefda6870c55021e88c090729d2cf331',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-103',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-103',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-103',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-119',
    target: {
      hash: '35801c718f86445cac0c251cde653877c2140176',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-119',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-119',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-119',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-123',
    target: {
      hash: '192721196265d9d154e7432741d3a1dc1714ebe0',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-123',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-123',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-123',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-131',
    target: {
      hash: 'ae21ad35f78554d4a77d01aa4ad4507d606e3efa',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-131',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-131',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-131',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-181',
    target: {
      hash: '06bff2da5990ccc7a3973d9800b26ad9061e7fa9',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-181',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-181',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-181',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-182',
    target: {
      hash: 'cb9481a79b89430d8b0f6e25b575c05a6963d7fb',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-182',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-182',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-182',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-183',
    target: {
      hash: '06d7ab350daa85dd85ec2a6724d57b706471c742',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-183',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-183',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-183',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-225',
    target: {
      hash: '549f6891b89349699c99345b1178cd59867687cf',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-225',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-225',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-225',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-242',
    target: {
      hash: '6611a023a8094709bb946517683cd52f4124f8b6',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-242',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-242',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-242',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/an-277',
    target: {
      hash: '3b08498b13eee75041873f95cbf936ad3acfe489',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/an-277',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/an-277',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/an-277',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'task/infinite-scroll',
    target: {
      hash: '505db19056c79621f70be86653a1ec1313105471',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/task/infinite-scroll',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/task/infinite-scroll',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/task/infinite-scroll',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'testing/color-picker',
    target: {
      hash: '38181c978cd7a65dc0455e51b5596f37a9f84326',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/testing/color-picker',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/testing/color-picker',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/testing/color-picker',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
  {
    name: 'uilm/an-294',
    target: {
      hash: 'f9a9e556e75d867dab55c24f03fadf4a0efaef72',
    },
    links: {
      self: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/refs/branches/uilm/an-294',
      },
      commits: {
        href: 'https://bitbucket.org/!api/2.0/repositories/selise01/ecap3-webclient-business-annanow/commits/uilm/an-294',
      },
      html: {
        href: 'https://bitbucket.org/selise01/ecap3-webclient-business-annanow/branch/uilm/an-294',
      },
    },
    type: 'branch',
    merge_strategies: ['merge_commit', 'squash', 'fast_forward'],
    default_merge_strategy: 'merge_commit',
  },
];

