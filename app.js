const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['voilet', 'green', '#32a852', '#78cf8f', '#65afcf', '#8565cf']


body.style.backgroundColor = 'red';

button.addEventListener('click', function () {
    let colorindex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorindex];
    console.log(colorindex);
})


