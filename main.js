gsap.fromTo(
    '.links',{
    x:0,
    y:50,
    opacity:0,
    duration:1
},{
    x:0,
    y:0,
    opacity:1,
    duration:1
});
gsap.fromTo(
    '.header-logo',{
    x:0,
    y:50,
    opacity:0,
    duration:1
},{
    x:0,
    y:0,
    opacity:1,
    duration:1
});
gsap.fromTo(
    '.header-btn',{
    x:0,
    y:50,
    opacity:0,
    duration:1
},{
    x:0,
    y:0,
    opacity:1,
    duration:1
});
gsap.fromTo(
    ".hero-heading",{
        x:-550,
        y:0,
        opacity:0,
        duration:1.5,
        skewX:30
    },{
        x:0,
        y:0,
        opacity:1,
        duration:1.5,
        skewX:0
    }
)
gsap.fromTo(
    '.hero-links ul li',{
    x:0,
    y:50,
    opacity:0,
    duration:1,
    
},{
    x:0,
    y:0,
    opacity:1,
    duration:1,
    stagger:0.4
});

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');

var n1 = 0;
num1.style.color = 'white'



