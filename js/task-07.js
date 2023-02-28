const changeFondSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

changeFondSize.addEventListener('input', (event) => {
    console.log(event);
    textSize.style.fondSize = event.target.value + 'px';
});