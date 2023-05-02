import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  user:any = 'C';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = localStorage.getItem('user') ? localStorage.getItem('user') : 'C';
   }

  async ngOnInit() {
    

  }

}
