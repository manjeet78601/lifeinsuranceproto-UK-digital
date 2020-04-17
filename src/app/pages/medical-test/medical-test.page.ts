import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-medical-test',
  templateUrl: './medical-test.page.html',
  styleUrls: ['./medical-test.page.scss'],
})
export class MedicalExamPage implements OnInit {


  constructor( private router: Router) { }

  ngOnInit() {
  }

  onsechdule() {
    this.router.navigate(['/medical-test/sechdule-appointment']);

  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
