import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset:.2,
            opacity:1,
            transform: 'translateX(20px)'
        }),
        style({
            offset:1,
            opacity:0,
            transform: 'translateX(-100%)'
        })
    ]))
)


// export let fade =  trigger('fade', [

//     state('void', style({opacity:0})),

//     transition(':enter, :leave', [
//       animate(2000)
//     ]),

// ])


//Easings
export let slide =  trigger('slide', [

    transition(':enter', [
      style({transform: 'translateX(-10px)'}),
      animate(500)
    ]),

    transition(':leave', [
      animate('0.5s cubic-bezier(.61, .29, .07, 1.02)', style({transform: 'translateX(-100%)'}))
    ]),

    //using keyframe
    transition(':leave', [
        animate('0.5s ease-out', keyframes([
            style({
                offset:.2,
                opacity:1,
                transform: 'translateX(20px)'
            }),
            style({
                offset:1,
                opacity:0,
                transform: 'translateX(-100%)'
            })
        ]))
      ]),

    transition(':leave', 
        useAnimation(bounceOutLeftAnimation)
      )

]);



//Parameterizing Reusable Animations
export let fadeInAnimation =  animation([
    style({opacity:0}),
    animate('{{ duration }} {{ easing }}')
], {
    params:{
        duration:'2s',
        easing:'ease-out'
    }
})

export let fade =  trigger('fade', [

    transition(':enter',
      useAnimation(fadeInAnimation)
    ),

    transition(':leave', [
        animate(2000, style({opacity:0}))
      ])

])