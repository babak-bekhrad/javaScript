// Get elements from base file
import { elements } from "./base";
export const getInput = () => elements.searchInput.value;

//delete content inputSearch
export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
};

const checkTitle = (param, limit = 17) => {
  var newTitle = [];
  if (param.length >= limit) {
    param.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(" ")} ...`;
  }
  return param;
};

const renderRecpie = recipe => {
  const markup = `
    <li>
        <a class="results__link results__link--active" href="${
          recipe.recipe_id
        }">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${checkTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
</li>
    `;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResult = (recipes, page = 1, resPerPage = 10) => {
  const start=0;
  const end=8;
  recipes.slice(start,end).forEach(e => {
    renderRecpie(e);
  });
};
