console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results);

  const forthPerson = data.results[3].name;
  console.log(forthPerson);

  const eyeColor = data.results[2].eye_color;
  console.log(eyeColor);
}

fetchData();
