import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcDashboardComponent } from './ac-dashboard/ac-dashboard.component';
import {AccountancyRoutingModule} from './accountancy-routing.module';
import { InvoiceMakerComponent } from './invoice-maker/invoice-maker.component';
import { AcPanelComponent } from './ac-panel/ac-panel.component';



@NgModule({
  declarations: [AcDashboardComponent, InvoiceMakerComponent, AcPanelComponent],
  imports: [
    CommonModule,
    AccountancyRoutingModule
  ]
})
export class AccountancyModule { }
