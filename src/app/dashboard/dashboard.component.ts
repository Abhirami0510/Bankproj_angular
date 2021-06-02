import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
accno="";
pswd="";
amount="";

wacno="";
wamount="";
wpswd="";

constructor(private router:Router, private dataService:DataService) {}

  ngOnInit(): void {
  }

deposit()
{
  var accno = this.accno;
  var pswd = this.pswd
  var amount = this.amount

  const result = this.dataService.deposit(accno,pswd,amount)
  if(result)
  {
    alert("Rs."+amount + " credited successfully")
    
  }
}

}
