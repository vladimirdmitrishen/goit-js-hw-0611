const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// ingredients.forEach((element) => {
//   const liEl = document.createElement("li");
//   console.log(liEl);
//   liEl.classList.add("li");
//   liEl.textContent = element;
// });
// const list = document.querySelector(".ingredients");
// list.appendChild(liEl);
const createIngredientsList = options => {
  return options.map(option => {
    const ingridientEl = document.createElement('li');
    ingridientEl.textContent = option;
    ingridientEl.classList.add('item');
    return ingridientEl;
  });
};
const elements = createIngredientsList(ingredients);
document.body.append(...elements);  