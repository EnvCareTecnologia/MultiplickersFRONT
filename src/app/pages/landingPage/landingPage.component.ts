import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recover-password',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent implements OnInit {

  userToken = '';
  tokenValid = false;
  buttonData: any;

  constructor(private _snack: MatSnackBar,
              private activatedRoute: ActivatedRoute, 
              private router: Router, 
              private _authService: AuthService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userToken = params['token'];
    });
  }

  loginForm = new FormGroup({
    login: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this._authService.validateToken(this.userToken).then( (resp:any) =>{
      this.tokenValid = resp;
    })
  }

  goTo(value: string): void{
    console.log(value);
    this.router.navigate([], { fragment: value });

    var topPos = document.getElementById(value)!.offsetTop;
    document.getElementById('body')!.scrollTop = topPos-50;
  }

  login(){
    this.router.navigate(['/auth/login']);
  }

  cadastrar(){
    this._snack.open('Cadastro realizado!', 'OK');
    this.router.navigate(['/auth/login']);
  }
}
