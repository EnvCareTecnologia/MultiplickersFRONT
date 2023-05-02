import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit, AfterContentInit{

  user:any = 'C';

  constructor(public dialog: MatDialog) {
    this.user = localStorage.getItem('user') ? localStorage.getItem('user') : 'C';
   }

  ngOnInit() {

  }

  openMyList(){

  }

  delay() {
    
  }

  async ngAfterContentInit(){

  }

  download(){

  }

}
