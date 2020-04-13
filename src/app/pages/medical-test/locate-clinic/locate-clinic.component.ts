import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locate-clinic',
  templateUrl: './locate-clinic.component.html',
  styleUrls: ['./locate-clinic.component.scss'],
})
export class LocateClinicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
