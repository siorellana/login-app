import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
        .then((res) => {
          console.log(res);
            }).catch(err => console.log(err.message));

  }

}
