import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.scss'],
})
export class ClinicDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
