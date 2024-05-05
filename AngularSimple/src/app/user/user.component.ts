import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: any = {
    id: null,
    firstName: '',
    lastName: '',
    loginId: '',
    password: '',
    dob: '',
    roleId: '',
    preload: [],
    message: "",
  }
  fileUpload: any = {};
  inputerror: any = {};

  constructor(private httpService: HttpServiceService, rout: ActivatedRoute, private httpclient: HttpClient) {
    var self = this;
    httpService.getPathVariable(rout, function (params: any) {
      self.form.id = params['id'];
    })

  }

  ngOnInit(): void {
    this.preload();
    if (this.form.id && this.form.id > 0) {
      this.display();
    }
  }
  display() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/get/' + this.form.id, function (res: any) {
      self.form = res.result.data
      self.myFile();
    });
  }

  preload() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/preload', function (res: any) {
      self.form.preload = res.result;
    })
  }

  save() {
    var self = this;
    this.httpService.post('http://localhost:8080/User/save/', this.form, function (res: any) {
      self.form.message = res.result.message;
      self.myFile();

      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }
    })

  }

  fileSelect(event: any) {
    this.fileUpload = event.target.files.item(0);
  }
  myFile() {
    var self = this;
    const formData = new FormData();
    formData.append('file', this.fileUpload);
    return this.httpclient.post("http://localhost:8080/User/profilePic/" + this.form.id, formData).subscribe(data => {
      
    }, error => {
     
    });;
  }
}


