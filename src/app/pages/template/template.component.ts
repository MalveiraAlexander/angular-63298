import { FormGroup, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  user: User = new User();
  constructor() { }
  send(form: NgForm) {
    console.log(form);

  }

  test(event: boolean, id: User) {
    console.log(event);
    console.log(id);
    console.log("Envio al backend");

  }
}

class User {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  //internal
  check: boolean = true;
}
