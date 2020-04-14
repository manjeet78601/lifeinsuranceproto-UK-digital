import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-locate-lab-appointment',
  templateUrl: './locate-lab.component.html',
  styleUrls: ['./locate-lab.component.scss'],
})
export class LocateLabComponent implements OnInit {
  locations = ['Newton - Lab Corp', 'Chealsea - Lab Corp', 'West Haven - Quest Diagnostics'];
  loc = 'Newton - Lab Corp';
  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit() { }
  goToNext() {
    this.router.navigate(['/medical-test/schedule-doctor-visit']);
  }


}
