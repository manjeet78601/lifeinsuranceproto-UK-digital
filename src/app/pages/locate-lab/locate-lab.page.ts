import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-lab',
  templateUrl: './locate-lab.page.html',
  styleUrls: ['./locate-lab.page.scss'],
})
export class LocateLabPage implements OnInit {

  availableLabs = [
    {
      name: 'LabCorp'
    },
    {
      name: 'Quest Diagnostics'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
