import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'bar-chart' },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'flexbox', component: FlexboxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
