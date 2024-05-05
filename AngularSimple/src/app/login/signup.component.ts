import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: any = {
    data: {},
    message: ''
  }
  inputerror: any = {}
  constructor(private httpservice: HttpServiceService) { }

  signUp() {
    var self = this;
    this.httpservice.post('http://localhost:8080/Auth/signUp/', this.form.data, function (res: any) {
      self.form.message = res.result.message;
      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }
    })
  }
}
