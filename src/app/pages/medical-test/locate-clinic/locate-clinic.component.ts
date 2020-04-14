import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-locate-clinic',
  templateUrl: './locate-clinic.component.html',
  styleUrls: ['./locate-clinic.component.scss'],
})
export class LocateClinicComponent implements OnInit {
  locations = ['Newton - Lab Corp', 'Chealsea - Lab Corp', 'West Haven - Quest Diagnostics'];
  loc = 'Newton - Lab Corp';

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  goToNext() {
    this.router.navigate(['/medical-test/book-clinic']);
  }
}
