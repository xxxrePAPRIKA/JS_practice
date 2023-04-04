// 'use strict';
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

// let btn = document.querySelector('.btn'),
//     timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10)
//     function frame() {
//         if(pos == 300) {
//             clearInterval(id)
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
    
// }

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     // timerId = setInterval(logger, 2000);
//     myAnimation();
// })

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

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('hello');
//         console.log('hello');
//     }
// }

// const sayHello = outer();



////////////////////////////////////////////////////////////////////////////////
// Работа с датами
'use strict';

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCDate());

// console.log(now.getTimezoneOffset());



let start = new Date();

for(let i = 0; i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл for отработал за ${end - start} милисекунд`)


////////////////////////////////////////////////////////////////////////////

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true
// });

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`hello ${this.name}`); 
//     }
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20)

// ivan.hello();
// alex.hello();

// User.prototype.exit = function() {
//     console.log(`User ${this.name} leave`);
// };

// ivan.exit();


///////////////////////////////////////////////////////////////////////////

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//     console.log(this);
//         return a + b
//     }

//     console.log(sum());
// };

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }

// obj.sum()

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// };

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//     return this*num;
// };

// const double = count.bind(2);
// console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
// });


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
};

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`текс: ${this.text}, цвет: ${this.bgColor}`);
    }
}


const div = new ColoredRectangleWithText(25, 10, 'Helloworld', 'red')
div.showMyProps();
console.log(div.calcArea());




const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(square);
console.log(long.calcArea());
console.log(long);