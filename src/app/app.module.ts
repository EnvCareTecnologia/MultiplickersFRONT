import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/authGuard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { JWTService } from './auth/jwt.service';
import { RoleGuardService } from './auth/roleGuard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    AuthGuardService, 
    RoleGuardService, 
    HttpClient, 
    MatSnackBar, 
    Overlay, 
    JWTService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
