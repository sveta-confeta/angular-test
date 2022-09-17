import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import {AppRoutingRoutingModule} from "./app-routing-routing.module";
import {IncomeComponent} from "./components/list-page/income/income.component";
import { OutcomeComponent } from './components/list-page/outcome/outcome.component';
import { LoanComponent } from './components/list-page/loan/loan.component';
import { InvestmentComponent } from './components/list-page/investment/investment.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    ListPageComponent,
    IncomeComponent,
    OutcomeComponent,
    LoanComponent,
    InvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
