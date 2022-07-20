import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AcDashboardComponent } from './ac-dashboard/ac-dashboard.component';
import { InvoiceMakerComponent } from './invoice-maker/invoice-maker.component';
import {AcPanelComponent} from './ac-panel/ac-panel.component';

const routes : Routes = [
  {path: '' , component: AcDashboardComponent,
  children: [
    {path: '', component: AcPanelComponent},
    {path: 'invoice', component: InvoiceMakerComponent}
  ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountancyRoutingModule { }
