let select = document.querySelector(".form-select");
let search = document.querySelector(".search");
let filmsList = document.querySelector(".movies__list");
let filmResult = document.querySelector('.movies-result');
let selectGenre = document.querySelector('.select-list');
let filmSearch = document.querySelector('.search');
let btn = document.querySelector('.btn');


let uniqGenres = (films) => {
  let uniq = [];

  films.map((film) => {
    film.genres.forEach((el) => {
      if (!uniq.includes(el)) {
        uniq.push(el);
      }
    });
  });
  return uniq;
};
uniqGenres(films);

let renderGenres = (arr) => {
  let resGenre = "";
  for (i of arr) {
    resGenre += `
<option selected value="${i}">${i}</option>
`;
  }
  select.innerHTML += resGenre;
};

renderGenres(uniqGenres(films));

function renderFilms(films) {
  let filmRes = "";

  filmResult.textContent = films.length;

  for (let i of films) {
    
    filmRes += `
    <li class="card movies-item">
    <img class="card-img-top" src="${i.poster}">
    <div class="card-body d-flex flex-column">
    <h5 class="card-title">${i.title}</h5>
    <p>${i.release_date}</p>
    <p>${i.overview}</p>
  `;
  }
  filmsList.innerHTML = filmRes;
}
renderFilms(films);


selectGenre.addEventListener('change', (evt)=>{
  let optval = evt.target.value;

  let filteredMovies = films.filter(movie => {
    return movie.genres.includes(optval);
  })
  renderFilms(filteredMovies);
});


btn.addEventListener('click', (e)=>{
  let inputVal = filmSearch;

  let regex = new RegExp(inputVal, 'gi');

  let searchedFilm = films.filter(film => {
    return film.title.match(regex)
  })

  renderFilms(searchedFilm)
})


