const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.createElement("ul");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ul.appendChild(li);
});
document.body.appendChild(ul);
