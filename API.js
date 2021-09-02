const API_KEY = 'd1c5d6157f4a5f8577bc98d32ed8b75a';
document.getElementById('click-search').addEventListener('click',() => {
    const cityName = document.getElementById('cityName').value;
    document.getElementById('cityName').value = ``;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => processing(data));
});

const processing = areaData => {
setInnerText("set-city", areaData.name);
setInnerText("set-temp", areaData.main.temp);
setInnerText("set-weather", areaData.weather[0].main);
// console.log(areaData);       
const iconUrl = `https://openweathermap.org/img/wn/${areaData.weather[0].icon}@2x.png`; 

const icon = document.getElementById('set-icon');
icon.setAttribute('src', iconUrl);


};

const setInnerText = (idName, value) =>{
    document.getElementById(idName).innerText= value;

}