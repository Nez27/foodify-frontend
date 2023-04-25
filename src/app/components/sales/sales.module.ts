import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { ScamOrdersComponent } from './scam-orders/scam-orders.component';



@NgModule({

  declarations: [OrdersComponent, TransactionsComponent, DetailOrderComponent, ScamOrdersComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class SalesModule { }
