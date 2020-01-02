import Search from "./models/Search";
import { elements, renderLoader,clearLoader } from "./views/base";
import * as searchView from "./views/searchView";

//global state of our App.
const state = {};

const controlSearch = async () => {
  // 1. get query from view
  const query = searchView.getInput();
  if (query) {
    //2. New search object and add to state
    state.search = new Search(query);
    //3. prepare for UI
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    //4. search for recipe
    await state.search.getResults();
    //5.render results on UI
    clearLoader();
    searchView.renderResult(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
