import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
const AWS = require('aws-sdk');
const { getSignedUrl } = require('aws-cloudfront-sign');

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss']
})
export class ReactivoComponent implements OnInit {

  formAdd: FormGroup;
  maxAmount: number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }


  send() {
    console.log(this.formAdd);
    console.log(this.formAdd.value.name);

  }


  createForm() {
    this.formAdd = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+(?:\d{1,3})?\s?(?:\d{1,5})?\s?\d{6,14}$/)]),
      maxAmount: new FormControl(null, [Validators.min(0)]),
      actualAmount: new FormControl(null, [(control: AbstractControl) => {
        return Validators.max(this.maxAmount)(control);
      }, Validators.min(0)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)]),
    });


  }

}
