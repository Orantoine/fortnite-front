import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appareil-auth',
  templateUrl: './appareil-auth.component.html',
  styleUrls: ['./appareil-auth.component.scss']
})
export class AppareilAuthComponent implements OnInit {

  authStatus = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(()=>{
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['appareils']);
    });
  }
  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
