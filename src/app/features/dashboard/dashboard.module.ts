import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
