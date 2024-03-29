const searchFood = () =>{
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value ;
  // console.log(searchText);
  searchField.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearch(data.meals));
}


const displaySearch = meals =>{
  console.log(meals);
  const searchResult = document.getElementById('search-result')
  searchResult.textContent = '';
  meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div')
          div.classList.add('cal')
          div.innerHTML= `<div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          </div>
          </div>
    
        `
    searchResult.appendChild(div)
  });
}

const loadMealDetails = mealId =>{
  console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data =>displayMealdetails(data.meals[0]))
}

const displayMealdetails = meal => {
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML =`<div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    mealDetails.appendChild(div);
}