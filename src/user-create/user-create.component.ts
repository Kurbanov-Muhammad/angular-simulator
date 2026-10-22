import { Component, Output, EventEmitter, } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../app/interfaces/IUser';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  @Output() createUser = new EventEmitter<IUser>();

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(25),
    ]),
    website: new FormControl('', [Validators.maxLength(100)]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      suite: new FormControl('', [Validators.maxLength(50)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      geo: new FormGroup({
        lat: new FormControl('', [Validators.required]),
        lng: new FormControl('', [Validators.required]),
      }),
    }),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      catchPhrase: new FormControl('', [Validators.maxLength(200)]),
      bs: new FormControl('', [Validators.maxLength(100)]),
    }),
  });

  onSubmit(): void {
    const newUser:IUser = {...this.userForm.value, id: Date.now()};
    this.createUser.emit(newUser);
    this.userForm.reset();
  }

}
