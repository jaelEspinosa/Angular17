import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject, computed } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/request';
import { delay, map } from 'rxjs';


interface State {
  users: User[],
  loading: boolean,

}


@Injectable({
  providedIn: 'root'
})


export class UsersService {

   #state = signal<State>({
    loading: true,
    users: [],
  })

  public users  = computed(()=> this.#state().users)
  public isLoading  = computed(()=> this.#state().loading)

  private http = inject ( HttpClient )

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
     .pipe(
      delay(1500)
     )
     .subscribe( res => {
      this.#state.set ({users: res.data, loading: false})

     })

   }

  getUserById ( id: string) {
   return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
     .pipe(
      delay(1500),
      map(res => res.data)
      )


}
}
