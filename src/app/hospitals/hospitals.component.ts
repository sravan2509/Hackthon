import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  public statecollegebeds_api
  public state
  public summary
  public medicalcollegebeds_api
  public medicalbeds
  
    constructor(private Getdata:GetDataService) { }
  
    ngOnInit() {
      this.Getdata.get_task3a().subscribe(c=>{
        this.statecollegebeds_api=c
       this.state=this.statecollegebeds_api.data.regional
       this.summary=this.statecollegebeds_api.data.summary
      })
      this.Getdata.get_task3b().subscribe(c=>{
        this.medicalcollegebeds_api=c
        this.medicalbeds=this.medicalcollegebeds_api.data.medicalColleges
      })
    }
  cartarr=[{
    "state": "A & N Islands",
    "name": "Andaman & Nicobar Islands Insitute of Medical Sciences, Port Blair",
    "city": "Port Blair",
    "ownership": "Govt.",
    "admissionCapacity": 100,
    "hospitalBeds": 460
  },
  {
    "state": "Andhra Pradesh",
    "name": "ACSR Government Medical College Nellore",
    "city": "Nellore",
    "ownership": "Govt.",
    "admissionCapacity": 150,
    "hospitalBeds": 750
  },
  {
    "state": "Andhra Pradesh",
    "name": "Alluri Sitaram Raju Academy of Medical Sciences, Eluru",
    "city": "Eluru",
    "ownership": "Trust",
    "admissionCapacity": 150,
    "hospitalBeds": 1070
  },
  {
    "state": "Andhra Pradesh",
    "name": "Andhra Medical College, Visakhapatnam",
    "city": "Visakhapatnam",
    "ownership": "Govt.",
    "admissionCapacity": 200,
    "hospitalBeds": 2017
  },
  {
    "state": "Andhra Pradesh",
    "name": "Apollo Institute of Medical Sciences and Research, Chittoor",
    "city": "Chittoor",
    "ownership": "Society",
    "admissionCapacity": 150,
    "hospitalBeds": 0
  }]
  total=[]
}