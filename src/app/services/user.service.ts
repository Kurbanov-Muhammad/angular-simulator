import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, catchError, finalize, defer, tap } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { MessageService } from './message.service';
import { LoaderService } from './loader.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private messageService: MessageService = inject(MessageService);
  private loaderService: LoaderService = inject(LoaderService);
  private usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.usersSubject.next(users);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

  loadUsers(): Observable<IUser[]> {
    return defer(() => {
      this.loaderService.showLoader();
      return this.userApiService.getUsers();
    }).pipe(
      tap((users: IUser[]) => {
        this.setUsers(users);
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageService.showError('Не удалось загрузить пользователей');
        return of([]);
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      }),
    );
  }

}
