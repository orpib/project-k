import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './shell/shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ShellComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
