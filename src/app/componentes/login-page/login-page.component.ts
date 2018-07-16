import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
public email: string;
public password: string;

  constructor(
      private authService: AuthService,
      public router: Router
  ) { }

  ngOnInit() {
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
        .then((res) => {
          console.log(res);
            }).catch(err => console.log(err.message));

  }

    onSubmitLogin() {
  this.authService.loginEmail( this.email, this.password)
      .then((res) => {
        this.router.navigate(['/privado'])
          console.log('Usuario Registrado OK');
        }).catch((err) => {
          console.log(err);
          this.router.navigate([('/login')]);
  });
  }

}
