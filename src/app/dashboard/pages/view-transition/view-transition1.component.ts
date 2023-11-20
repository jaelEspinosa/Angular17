import { TitleComponent } from './../../../shared/title/title.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector:'app-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title title ="View Transition - 1"/>

    <section class="flex justify-start">
      <img  srcset="https://picsum.photos/id/237/200/300"
            alt="picsum"
            width="200"
            height="300"
            style="view-transition-name: hero1;"
            >
<!-- style="view-transition-name: hero2; agregando esto en los dos componentes
    que llevan el mismo elemento se genera la transicion  -->

      <div class="bg-blue-500 w-56 h-56"
           style="view-transition-name: hero2;"
      ></div>
    </section>


  `


})
export default class ViewTransition1Component {

}
