// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));

// wrapper.addEventListener('click', (event) => {
//     if (event.target && !event.target.matches('.red')) {
//         event.target.classList.add('red');
//     } else if (event.target && event.target.matches('.red')) {
//         event.target.classList.remove('red');
//     };
// });

// btns.forEach (btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     })
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn)

let btn = document.querySelector('.btn'),
    timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10)
    function frame() {
        if(pos == 300) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
    
}

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    // timerId = setInterval(logger, 2000);
    myAnimation();
})

// clearInterval(timerId);

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// const id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500)
// }, 500)

// var ball = document.getElementById("ball");
// var containerHeight = document.documentElement.clientHeight;
// var containerWidth = document.documentElement.clientWidth;
// var ballHeight = parseInt(window.getComputedStyle(ball).getPropertyValue("height"));
// var ballWidth = parseInt(window.getComputedStyle(ball).getPropertyValue("width"));
// var maxHeight = containerHeight - ballHeight;
// var maxWidth = containerWidth - ballWidth;
// var currentTop = 0;
// var currentLeft = 0;
// var step = 10;
// var directionTop = 1;
// var directionLeft = 1;

// function moveBall() {
//     currentLeft += step * directionLeft;
//     currentTop += step * direction;
//     if (currentTop > maxHeight || currentTop < 0) {
//         directionTop = -directionTop;
//     }
//     if (currentLeft > maxWidth || currentLeft < 0) {
//         directionLeft = -directionLeft;
//     }
//     ball.style.left = currentLeft + "px";
//     ball.style.top = currentTop + "px";
//     window.requestAnimationFrame(moveBall);
// }

// window.requestAnimationFrame(moveBall);