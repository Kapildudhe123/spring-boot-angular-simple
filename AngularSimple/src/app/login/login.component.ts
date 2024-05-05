import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    loginId: '',
    password: '',
    message: ''
  }
  inputerror: any = {}

  constructor(private httpservice: HttpServiceService, private rout: Router) {

  }
  signIn() {
    var self = this;

    this.httpservice.post('http://localhost:8080/Auth/login/', this.form, function (res: any) {
      if (res.success) {

        localStorage.setItem('fname', res.result.data.firstName);
        localStorage.setItem('lname', res.result.data.lastName);

        localStorage.setItem('rname', res.result.data.roleName);
        self.rout.navigateByUrl('welcome');
      } else {
        self.form.message = res.result.message;
      }
      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }
    })


  }
}
