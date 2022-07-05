import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lettreRe';
  //myimage:string = "assets/images/ser.png"; 

  constructor (public authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
  
  

}
