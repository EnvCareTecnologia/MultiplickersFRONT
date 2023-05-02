import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recover-password',
  templateUrl: './multiplicker.component.html',
  styleUrls: ['./multiplicker.component.scss']
})
export class MultiplickerComponent implements OnInit {

  constructor(private _snack: MatSnackBar,
              private activatedRoute: ActivatedRoute, 
              private router: Router, 
              private _authService: AuthService) {
  }

  loginForm = new FormGroup({
    nome: new FormControl('',Validators.required)
  });

  ngOnInit(): void {

  }

  procurar(){

  }

  goTo(value: string): void{
    var topPos = document.getElementById(value)!.offsetTop;
    document.getElementById('body')!.scrollTop = topPos-50;
  }

}
