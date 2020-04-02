import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sechdule-appointment',
  templateUrl: './sechdule-appointment.component.html',
  styleUrls: ['./sechdule-appointment.component.scss'],
})
export class SechduleAppointmentComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

  urgent() {
    this.router.navigate(['medical-exam/urgent-care']);
  }

  //(click)="urgent()" 
  // goNext(state) {
  //   if (state !== 4 ) {
  //     this.state = state + 1;
  //   } else {
  //     this.router.navigate(['urgent-care']);
  //   }

  // }

}
