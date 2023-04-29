import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/response/user.response';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../models/request/user.request';
import { of, pipe } from 'rxjs';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  showCreate: boolean = false;
  addForm: FormGroup;
  users1: Array<UserResponse>;
  user: UserResponse;
  isEdit: boolean = false;
  loading: boolean = true;
  hobbies: string[] = ['Películas', 'Games', 'Repostaría', 'Jardinería', 'Futbol', 'Baile']
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.createForm();
    this.getUsers();
  }

  save() {
    let user: UserRequest = {
      nombre: this.addForm.value.name,
      apellido: this.addForm.value.lastname,
      email: this.addForm.value.email,
      edad: this.addForm.value.yearsold,
      profesion: this.addForm.value.job,
      hobbies: this.addForm.value.hobbies
    };
    if (this.isEdit) {
      this.userService.updateUser(user, this.user.id).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.hide();
          this.getUsers();
        }
      })
    } else {
      this.userService.createUser(user).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.hide();
          this.getUsers();
        }
      })
    }


  }


  getUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (users: any) => {
        this.users1 = users;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.user = null;
        this.isEdit = false;
        this.addForm.reset();
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      }
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.getUsers();
      }
    });

    //Se usa en proyectos viejos
    // this.userService.deleteUser(id).subscribe((data) => {
    //   console.log(data);
    // }, (err) => {
    //   console.log(err);
    // }, () => {
    //   console.log('complete');
    //   this.getUsers();
    // });
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe({
      next: (user: any) => {
        this.user = user;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.isEdit = true;
        this.addForm.patchValue({
          name: this.user.nombre,
          lastname: this.user.apellido,
          yearsold: this.user.edad,
          email: this.user.email,
          job: this.user.profesion,
        });
        this.showCreate = true;
      }
    });
  }


  createForm() {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      yearsold: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(150)]),
      email:  new FormControl('', [Validators.required, Validators.email]),
      job: new FormControl('', [Validators.required]),
      hobbies: new FormControl(null),
    })
  }


  show() {
    this.showCreate = true;
  }

  hide() {
    this.showCreate = false;
  }
}
