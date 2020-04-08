import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urgent-care',
  templateUrl: './urgent-care.component.html',
  styleUrls: ['./urgent-care.component.scss'],
})
export class UrgentCareComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

}
