import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',

})
export class UserlistComponent implements OnInit {
  form: any = {
    id: null,
    list: [],
    search: {},
    pageNo: 0,
    preload: [],
    message: ''

  }
  constructor(private httpservice: HttpServiceService, private rout: Router) { }
  ngOnInit(): void {
    this.preload();
    this.search();

  }
  preload() {
    var self = this;
    this.httpservice.get('http://localhost:8080/User/preload', function (res: any) {
      self.form.preload = res.result;
    })
  }
  next() {
    this.form.pageNo++;
    this.search();

  }
  previous() {
    this.form.pageNo--;
    this.search();
  }
  edit(page: any) {
    this.rout.navigateByUrl(page);

  } select(userId: any) {
    this.form.id = userId;

  }
  delete() {
    var self = this;
    this.httpservice.get('http://localhost:8080/User/delete/' + this.form.id, function (res: any) {
      self.form.message = res.result.message;
      self.search();
    })
  }
  search() {
    var self = this;
    this.httpservice.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.search, function (res: any) {
      if (res.result.message) {
        self.form.message = res.result.message;
      }
      self.form.list = res.result.data;
    });
  }
}