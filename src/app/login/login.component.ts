import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";

  // account = "Account Number";
  acno = "";
  pswd = "";

  // account_details: any = {
  //   1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
  //   1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
  //   1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
  //   1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },
  // }

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
  // accChange(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);
  // }
  login() {
  
    var accno = this.acno;
    var pswd = this.pswd;
    
    const result = this.dataService.login(accno,pswd)
    if(result)
    {
      alert("Successfully logged In")
      this.router.navigateByUrl("dashboard")

    }
  } 
  register() {
    this.router.navigateByUrl("register");
  }
}
