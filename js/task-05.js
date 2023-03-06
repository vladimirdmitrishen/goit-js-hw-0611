
const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (event) => {
     outputNameEl.textContent = event.target.value.trim();
     if (event.target.value === "") {
          outputNameEl.textContent = "Amonymous";  
     }
});

       
