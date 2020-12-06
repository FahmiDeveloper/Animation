import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [

    fade //use one file for animation


    

    // trigger('fade', [

    //   state('void', style({opacity:0})),//avoid repetition of style({opacity:0}

    //   //Implementing a Fade-in Animation
    //   transition('void => *', [
    //     animate(2000)
    //   ]),

    //    //Implementing a Fade-out Animation
    //    transition('* => void', [
    //     animate(2000)
    //   ]),


    //   //avoid repetition of transition
    //   transition('void => *, * => void', [  //methode1
    //     animate(2000)
    //   ]),

    //   transition('void <=> *', [ //methode2
    //     animate(2000)
    //   ]),

    //   transition(':enter, :leave', [ //methode3
    //     animate(2000)
    //   ]),



    // ])
  ]
})
export class TodosComponent {

  items:any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car assurance'
  ]

  addItem(input:HTMLInputElement){
    this.items.splice(0, 0, input.value);
    input.value='';
  }

  remove(item){
    this.items.splice(item, 1);
  }

}
