import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-medical-exam',
  templateUrl: './medical-exam.page.html',
  styleUrls: ['./medical-exam.page.scss'],
})
export class MedicalExamPage implements OnInit {


  constructor( private router: Router) { }

  ngOnInit() {
  }

  onsechdule() {
    this.router.navigate(['/medical-exam/sechdule-appointment']);

  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
