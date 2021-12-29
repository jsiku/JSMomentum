const city = document.querySelector("#weather span:first-child");
const temp = document.querySelector("#weather span:nth-child(2)");
const weather = document.querySelector("#weather span:last-child");

const API_KEY = "649564f0a51e41eec4a9c0ca3c463d4c";



function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name);
            city.innerText = data.name;
            temp.innerText = data.main.temp;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Getting your position is failed.")
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);