import { TitleComponent } from '../../../shared/title/title.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector:'app-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title title ="View Transition - 2"/>

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300"
           width="300"
           height="400"
           class=" rounded shadow-md"
           style="view-transition-name: hero1;"
           >

      <div class=" fixed bottom-10 right-7.5  bg-blue-700 rounded w-[300px] h-[200px]"
           style="view-transition-name: hero2;"
           ></div>
    </section>


  `


})
export default class ViewTransition2Component {

}
