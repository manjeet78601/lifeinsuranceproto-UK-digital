import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sechdule-appointment',
  templateUrl: './sechdule-appointment.component.html',
  styleUrls: ['./sechdule-appointment.component.scss'],
})
export class SechduleAppointmentComponent implements OnInit {
  locations = ['Newton - Lab Corp', 'Chealsea - Lab Corp', 'West Haven - Quest Diagnostics'];
  constructor(private router: Router) { }

  ngOnInit() { }

  // urgent1() {
  //   this.router.navigate(['/medical-exam/urgent-care']);
  // }
    
  goToNext() {
    this.router.navigate(['/medical-exam/email-appt']);
  }


}
