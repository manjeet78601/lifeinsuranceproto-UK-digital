import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import {HomeConstants} from 'src/app/services/user.service';



@Component({
  selector: 'app-medical-exam',
  templateUrl: './medical-exam.page.html',
  styleUrls: ['./medical-exam.page.scss'],
})
export class MedicalExamPage implements OnInit {
  // BTTN = HomeConstants.BTTN;

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  InsuranceBudget() {
    // this.navigationService.setCompletedMenu('Insurance calculator');
    this.router.navigate(['/home/facial-scan']);

  }

  // sechdule() {
  //   this.router.navigate(['/sechdule-appoint']);
  // }

}
