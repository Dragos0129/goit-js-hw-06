const categoriesList = document.querySelector("#categories");

const totalCategories = categoriesList.querySelectorAll(".item").length;

console.log("Number of categories: " + totalCategories);

categoriesList.querySelectorAll(".item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;

  console.log("Category: " + title);
  console.log("Elements: " + elements);
});
