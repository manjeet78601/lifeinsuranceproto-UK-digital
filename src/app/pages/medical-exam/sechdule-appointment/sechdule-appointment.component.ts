import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-sechdule-appointment',
  templateUrl: './sechdule-appointment.component.html',
  styleUrls: ['./sechdule-appointment.component.scss'],
})
export class SechduleAppointmentComponent implements OnInit {
  locations = ['Newton - Lab Corp', 'Chealsea - Lab Corp', 'West Haven - Quest Diagnostics'];
  loc = 'Newton - Lab Corp';
  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit() { }
  goToNext() {
    this.router.navigate(['/medical-exam/schdule-calender']);
    //email calender
  }


}
