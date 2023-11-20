import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop'

import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/request';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector:'app-user-one',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titlelabel()"></app-title>
     @if ( user() ) {
       <section>
        <div class="w-full rounded-xl h-full flex flex-col items-center">
          <img class="rounded-xl shadow" [srcset]="user()!.avatar" [alt]="user()!.first_name" width="250px" height="300px">
          <h3 class="text-center text-3xl">{{user()!.first_name}} {{user()!.last_name}} </h3>
          <h5 class="text-center text-xl">{{user()!.email}} </h5>
        </div>
       </section>
     }@else {
      <p>Cargando info...</p>
     }

  `

})
export default class UserComponent {

private route = inject ( ActivatedRoute )
private userSvc = inject ( UsersService )



public user = toSignal(
  this.route.params.pipe(
    switchMap( ({id}) => this.userSvc.getUserById( id ) )
  )
)

public titlelabel = computed( () => {
  if(this.user()){
    return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`
  }else{
    return 'User'
  }

})
}
