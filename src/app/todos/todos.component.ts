import { animate, animateChild, group, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounceOutLeftAnimation, fadeInAnimation, slide } from '../animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [

    //Querying Child Elements with query() and animating Child Elements with animateChild()
    trigger('todosAnimation', [
      transition(':enter', [
      group([ // to solve problem of run animation on sequence
        query('h2', [
          style({transform:'translateY(-20px)'}),
          animate(1000)
        ]),
        // query('@todoAnimation', animateChild()),
        query('@todoAnimation', stagger(200, animateChild()) // using stagger function shoukd be with query function
        )
      ])
     ])
   ]),

    //Parameterizing Reusable Animations
    trigger('todoAnimation', [
      transition(':enter', [
      useAnimation(fadeInAnimation, {
        params:{
          duration: '500ms'
        }
      })
     ]),
     transition(':leave', [
       style({backgroundColor: 'red'}),
       animate(1000),
       useAnimation(bounceOutLeftAnimation)
     ]),
   ])


   //Creating Reusable Animations with animation() 
  //  trigger('todoAnimation', [
  //      transition(':enter', [
  //      style({opacity:0}),
  //      animate(2000)
  //     ]),
  //     transition(':leave', [
  //       style({backgroundColor: 'red'}),
  //       animate(1000),
  //       useAnimation(bounceOutLeftAnimation)
  //     ]),
  //   ])

    //slide //use one file for animation

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

  //Animation callback
  animationStarted($event){console.log($event)}
  animationDone($event){console.log($event)}

}
