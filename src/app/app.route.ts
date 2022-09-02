import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    data: {
      isFullScreen: true,
    },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    data: {
      isFullScreen: true,
      isPrivate: false,
    },
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      isPrivate: true,
    },
    //path: 'dashboard', component: ShellComponent,

    // children: [
    //   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    //   { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    // ]
  },

  {
    path: 'chart',
    loadChildren: () =>
      import('./charts/chart.module').then((m) => m.ChartModule),
    data: {
      isPrivate: true,
    },
  },
];
