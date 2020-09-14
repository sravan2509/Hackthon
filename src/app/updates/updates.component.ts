import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.check(0)
  }
  
  public   notifications= [
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
  ]

  check(index){
    if(this.notifications[index].title.slice(0,9).trim().length==9 && this.notifications[index].title.slice(0,9)[2]==='.'){
      console.log( this.notifications[index].title.slice(0,9).trim().length+"efsd"+true+'yuhuyhgyu'+this.notifications[index].title.slice(0,9)[2])
     return true
    }

    // else{
    //   console.log(false);
    //   console.log( this.notifications[index].title.slice(0,9).trim().length+"efsd"+true+'yuhuyhgyu'+this.notifications[index].title.slice(0,9)[2])
      
    // }
  }
  
  
  
  
}
