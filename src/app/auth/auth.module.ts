import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AuthGuard } from "./auth-guard-service";
import { AuthService } from "./auth.service";


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule {}
