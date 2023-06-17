import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultipleServicesComponent } from './components/multiple-services/multiple-services.component';
import { CustomerServiceService } from './services/customer-service.service';
import { CountryServiceService } from './services/country-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MultipleServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountryServiceService, CustomerServiceService],
  bootstrap: [MultipleServicesComponent]
})
export class AppModule { }
