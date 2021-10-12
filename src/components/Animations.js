import gsap from 'gsap'

// const h1a = document.getElementsByClassName('animoneh1')
// console.log(h1a)
// function n(){
//     console.log(h1a)
//     h1a.
// }
//
// setTimeout(()=>{
//     n()
// },5000)

const tl = gsap.timeline({onComplete(){tl.kill()}});
const ts = gsap.timeline({onComplete(){ts.kill()}});
const ts2 = gsap.timeline({onComplete(){ts2.kill()}});
const ts3 = gsap.timeline({onComplete(){ts3.kill()}});
const ts4 = gsap.timeline({onComplete(){ts4.kill()}});
const ts5 = gsap.timeline({onComplete(){ts5.kill()}});

const ets = {

    new(){
        tl.to('.animoneh1', 1.2, {x: '0', delay: 1.3})
            .to('.overlay', 1.2, {height: '0', delay: 0.5})
            .to('.navbar', 0.9, {top: '0'}, '-=0.3')
            .to('.animoneh1',0,{y:'-18vw'})
            // .call(n)
    },
    new2: () => {
        ts
            .to('.ruller', 1.4, {width: '0%', delay: 0.2})
            .to('.image-two', 1.4, {scale: 1, delay: -1.5})
                .to('.desig',0.9,{delay: 0, stagger:{ amount:0.6, y:'12vw'}})
    },
    new3: () => {
        ts2.to('.test', 0.9, {x: '100%', delay: 0.2})
            .to('.animh1', 0, {display: 'block'})
            .to('.animh1', 0.5, {top: '-10vw', delay: 0.2})
    },
    new4: () => {
        ts3.to('.box', 1, {
            scale: 0,
            borderRadius:'50%',
            background: '#f5072a',
            yoyo: false,
            ease: "power1.inOut",
            delay: 0.5,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "end"
            }
        }).to('.img4',1.5,{scale:0.9, delay: -1.5})
    },
    new5(){
        ts4.to('.img5',0.8,{delay:0.4, stagger:{ amount:0.6, y:'0',     }})
            .to('.img5 img',0.5,{scale:'1'})
    },
    new6(){
        ts5.to('.text-container',1,{x:0, delay:0.4})
            .to('.two-text', 0.4,{y:'-11vw'})
            .to('.one-text', 0.4,{y:'-22vw'})
            .to('.anim-img6', 0.5,{scale:'1'})
            .to('.anim-img6', 0.2,{rotate:'7deg'})
    }
}

export default ets












