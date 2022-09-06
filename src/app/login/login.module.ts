import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MaterialModule } from '../shared/material.module';
import { BranchDeleteScriptMakerComponent } from './component/branch-delete-script-maker/branch-delete-script-maker.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '**', redirectTo: 'login' }
];


@NgModule({
    declarations: [
        LoginComponent,
        BranchDeleteScriptMakerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
    ]
})
export class LoginModule { }
