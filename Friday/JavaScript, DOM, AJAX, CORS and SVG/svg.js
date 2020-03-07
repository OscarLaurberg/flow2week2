
const map = document.getElementById('svg2');

let selectedElement;

map.addEventListener('mouseover', e => {
  selectedElement && (selectedElement.style.fill = '#c0c0c0');
  
  selectedElement = e.target;
  
  selectedElement.style.fill = getRandomColor();
  
  const id = selectedElement.id;
  
  fetch(`http://restcountries.eu/rest/v1/alpha?codes=${id}`)
    .then(res => res.json())
    .then(data => showCountry(data));

});

const showCountry = data => {
    data.forEach(country => {
      document.getElementById('countryRow').innerHTML = country.name;
      document.getElementById('populationRow').innerHTML = country.population;
      document.getElementById('areaRow').innerHTML = country.area;
      document.getElementById('borderRow').innerHTML = country.borders;
    });
  };
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }