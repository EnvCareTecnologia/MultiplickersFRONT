import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { JWTService } from 'src/app/auth/jwt.service';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.component.html',
  styleUrls: ['./header-side.component.scss']
})
export class HeaderSideComponent implements OnInit {

  user:any = 'C';

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? localStorage.getItem('user') : 'C';
  }

  search(event: any) {

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  exit(){
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

}
