//Zadanie 1
const allCategories = window.document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
})


