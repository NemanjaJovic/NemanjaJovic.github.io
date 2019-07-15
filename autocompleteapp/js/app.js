const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

// Get states
const getStates = async () => {
 const res = await fetch('../data/states.json');
 states = await res.json();
};

// FIlter states
const searchStates = searchText => {
 // Get matches to current text input
 let matches = states.filter(state => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return state.name.match(regex);
 });

 // Clear when input or matches are empty
 if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
 }

 outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
 if (matches.length > 0) {
  const html = matches
   .map(
    match => `<div class="card card-body mb-1" style="background-image:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${match.img});background-position:center;background-size:cover;">
    <h4 class="text-primary">${match.name}</h4>
    <small style="color: #fff">Regija/Kanton: ${match.region}</small>
   </div>`
   )
   .join('');
  matchList.innerHTML = html;
 }
};



window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value));