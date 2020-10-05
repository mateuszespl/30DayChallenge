const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");

const fetchAPI = async () => {
  const response = await fetch(endpoint, { method: "GET" });
  const citiesArray = await response.json();
  cities.push(...citiesArray);
  console.log(cities);
};
fetchAPI();

const createListItem = ({ city, population }) => {
  const li = document.createElement("li");
  li.innerText = city;
  const span = document.createElement("span");
  span.innerText = population;
  li.appendChild(span);
  suggestions.appendChild(li);
};

const filterCities = (e) => {
  [...document.querySelectorAll("li")].forEach((n) => n.remove());
  const value = e.target.value.toLowerCase();
  const filteredCities = cities.filter((city) =>
    city.city.toLowerCase().includes(value)
  );
  filteredCities.forEach((city) => createListItem(city));
};

input.addEventListener("keydown", filterCities);
