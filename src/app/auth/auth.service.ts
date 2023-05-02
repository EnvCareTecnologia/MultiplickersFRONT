import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWTService } from './jwt.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthService {

    constructor(private _snack: MatSnackBar,
                private router: Router,
                private tokenService: JWTService) {}

    public async login(data:any){
        
    }

    public async recoverPassword(data: any) {

    }

    public async signup(data:any) {
        
    }

    public async validateToken(data:any) {
        
    }

    public isLogged(){
        return this.tokenService.decode(localStorage.getItem('userData')?.toString());
    }

    public isAdm(){
        return this.tokenService.decodeRole(localStorage.getItem('userData')?.toString()) == 'A';
    }

    public logout(){
        localStorage.removeItem('userData');
    }
}