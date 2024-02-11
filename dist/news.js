import FilterBySearch from './filterBySearch.js'
import RenderCard from './renderCard.js'
const cardsArea = document.querySelector('.cardsNewsSection')
async function getNews() {
  let response = await fetch(
    'https://api.spaceflightnewsapi.net/v4/articles/'
  ).then(res => res.json())
  cardsArea.innerHTML = ''
  response.results.forEach(RenderCard)
  response.results.forEach(FilterBySearch)
}
getNews()
