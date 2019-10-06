import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationComponent } from './shared/components/calculation/calculation.component';
import { CalHistoryComponent } from './shared/components/cal-history/cal-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    CalHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
