import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-clinic',
  templateUrl: './book-clinic.component.html',
  styleUrls: ['./book-clinic.component.scss'],
})
export class BookClinicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
