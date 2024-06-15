const categoriesList = document.querySelectorAll(`#categories .item`);
const categoriesEl = document.querySelectorAll(`.item`)



console.log(`Number of categories: ${categoriesList.length}`);
categoriesEl.forEach((item) => {
    const titleEl = item.querySelector(`h2`);
    const liElems = item.querySelectorAll(`.item li`)
        ;
    console.log(`Category: ${titleEl.textContent}`)
    console.log (`Elements : ${liElems.length}`)
 })



