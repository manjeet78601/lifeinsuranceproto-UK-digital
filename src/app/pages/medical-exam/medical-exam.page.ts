import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-medical-exam',
  templateUrl: './medical-exam.page.html',
  styleUrls: ['./medical-exam.page.scss'],
})
export class MedicalExamPage implements OnInit {

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }


}
