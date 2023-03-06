const changeFondSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

changeFondSize.addEventListener('input', (event) => {
    console.log(event);
    changeFondSize.style.fontSize = '(event.carrentTarget.value)px';
});