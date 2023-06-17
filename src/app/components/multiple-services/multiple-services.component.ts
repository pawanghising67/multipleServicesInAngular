import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {
  public countryResponse: any;
  public customerResponse: any;
  constructor(private _country : CountryServiceService, private _customer :CustomerServiceService) { }

  ngOnInit(): void {
    forkJoin([this._country.getCountries(), this._customer.getCustomers()]).subscribe((response: any)=>{
      this.countryResponse = response[0];
      this.customerResponse = response[1];
    })
    }
    

}
