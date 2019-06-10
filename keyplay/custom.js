let toggle = document.querySelector('.toggle-btn');
let canvasColor = document.getElementById('myCanvas');



toggle.addEventListener('click', () => {
    let rgbColorOne = (Math.floor(Math.random() * 255));
    let rgbColorTwo = (Math.floor(Math.random() * 255));
    let rgbColorThree = (Math.floor(Math.random() * 255));

    let randomRgb = `rgba(${rgbColorOne}, ${rgbColorTwo}, ${rgbColorThree})`;
    canvasColor.classList.toggle('backgroundColor');
    toggle.style.backgroundColor = randomRgb;
});

toggle.addEventListener('mouseenter', () => {
    toggle.style.padding = '30px 50px';
});
toggle.addEventListener('mouseleave', () => {
    toggle.style.padding = '20px 40px';
});

canvasColor.addEventListener('touch', () => {
    prompt();
})

