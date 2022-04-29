let weatherSearch = document.getElementById('weatherSearch');
let prev = document.getElementById('prev');
let day5 = document.getElementById('5day');
let title = document.getElementById('title5');
let firstLi = document.getElementById('first');
let results = document.getElementById('results');
let api = 'https://api.openweathermap.org/data/2.5/weather';
let appid = '&appid=1c711c962aa71eb2eb36978af4fdef75';
let citySel;
let current = moment();
let date2  = moment().add(1,'days');
let date3  = moment().add(2,'days');
let date4  = moment().add(3,'days');
let date5  = moment().add(4,'days');

if (firstLi === null) {
    title.style.display = 'none';
    results.style.display = 'none';
 }

function callWeather(citySel) {
    results.innerHTML = '';
    day5.innerHTML = '';
       
    if (!citySel) {
        return;
    }

    let apiPull = api + '?q=' + citySel + appid;

    fetch(apiPull)
    .then(function (response){
        if (!response.ok){
            throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
        let name = locRes.name;
        let icon = 'http://openweathermap.org/img/wn/' + locRes.weather[0].icon +'.png';
        let icon1 = document.createElement('img');
        icon1.src = icon;
        let weather = locRes.weather[0].main;
        let temp = Math.round(((locRes.main.temp - 273.15) * 1.8) + 32);
        let wind = locRes.wind.speed;
        let humidity = locRes.main.humidity;
        let lat = locRes.coord.lat;
        let lon = locRes.coord.lon;

        let nameResults = document.createElement('h4');
        nameResults.textContent = name + ': ' + current.format('MMM Do, YYYY');
        let weatherResults = document.createElement('p');
        weatherResults.textContent = 'Conditions: ' + weather;;
        weatherResults.append(icon1);
        let tempResults = document.createElement('p');
        tempResults.textContent = 'Temp: ' + temp + '°';
        let windResults = document.createElement('p');
        windResults.textContent = 'Wind: ' + wind + ' mph';
        let humidityResults = document.createElement('p');
        humidityResults.textContent = 'Humidity: ' + humidity + "%";

        let city = document.createElement('button');
        city.textContent = name;
        city.id = name;
        city.className = "btn btn-secondary";
        prev.append(city);

        results.append(nameResults, weatherResults, tempResults, windResults, humidityResults);
        
        let api5Day = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&ctn=5&appid=1c711c962aa71eb2eb36978af4fdef75';
        
        fetch(api5Day)
        .then(function (response){
            if (!response.ok){
                throw response.json();
          }
    
          return response.json();
        })
        .then(function (locRes2){
            let weather1 = locRes2.daily[0].weather[0].main;
            let temp1 = Math.round(((locRes2.daily[0].temp.day - 273.15) * 1.8) + 32);
            let wind1 = locRes2.daily[0].wind_speed;
            let humid1 = locRes2.daily[0].humidity;
            let weather2 = locRes2.daily[1].weather[0].main;
            let temp2 = Math.round(((locRes2.daily[1].temp.day - 273.15) * 1.8) + 32);
            let wind2 = locRes2.daily[1].wind_speed;
            let humid2 = locRes2.daily[1].humidity;
            let weather3 = locRes2.daily[2].weather[0].main;
            let temp3 = Math.round(((locRes2.daily[2].temp.day - 273.15) * 1.8) + 32);
            let wind3 = locRes2.daily[2].wind_speed;
            let humid3 = locRes2.daily[2].humidity;
            let weather4 = locRes2.daily[3].weather[0].main;
            let temp4 = Math.round(((locRes2.daily[3].temp.day - 273.15) * 1.8) + 32);
            let wind4 = locRes2.daily[3].wind_speed;
            let humid4 = locRes2.daily[3].humidity;
            let weather5 = locRes2.daily[4].weather[0].main;
            let temp5 = Math.round(((locRes2.daily[4].temp.day - 273.15) * 1.8) + 32);
            let wind5 = locRes2.daily[4].wind_speed;
            let humid5 = locRes2.daily[4].humidity;
            let uv = locRes2.current.uvi;

            if (uv < 3){
                let uvIndex = document.createElement('li');
                uvIndex.textContent = 'UV Index: ' + uv + ' ';
                let uvIcon = document.createElement('i');
                uvIcon.className = 'fa-solid fa-sun text-success';
                uvIndex.append(uvIcon);
                results.append(uvIndex);
            } else if (uv > 2 && uv < 5){
                let uvIndex = document.createElement('li');
                uvIndex.textContent = 'UV Index: ' + uv + ' ';
                let uvIcon = document.createElement('i');
                uvIcon.className = 'fa-solid fa-sun text-warning';
                uvIndex.append(uvIcon);
                results.append(uvIndex);
            } else {
                let uvIndex = document.createElement('li');
                uvIndex.textContent = 'UV Index: ' + uv + ' ';
                let uvIcon = document.createElement('i');
                uvIcon.className = 'fa-solid fa-sun text-danger';
                uvIndex.append(uvIcon);
                results.append(uvIndex);  
            }

            let iconNew = 'http://openweathermap.org/img/wn/' + locRes2.daily[0].weather[0].icon +'.png';
            let i1 = document.createElement('img');
            i1.src = iconNew;
            let icon2 = 'http://openweathermap.org/img/wn/' + locRes2.daily[1].weather[0].icon +'.png';
            let i2 = document.createElement('img');
            i2.src = icon2;
            let icon3 = 'http://openweathermap.org/img/wn/' + locRes2.daily[2].weather[0].icon +'.png';
            let i3 = document.createElement('img');
            i3.src = icon3;
            let icon4 = 'http://openweathermap.org/img/wn/' + locRes2.daily[3].weather[0].icon +'.png';
            let i4 = document.createElement('img');
            i4.src = icon4;
            let icon5 = 'http://openweathermap.org/img/wn/' + locRes2.daily[4].weather[0].icon +'.png';
            let i5 = document.createElement('img');
            i5.src = icon5;            
            
            
            
            let d1 = document.createElement('li');
            d1.textContent = current.format('MM/DD/YY');
            let d2 = document.createElement('li');
            d2.textContent = date2.format('MM/DD/YY');
            let d3 = document.createElement('li');
            d3.textContent = date3.format('MM/DD/YY');
            let d4 = document.createElement('li');
            d4.textContent = date4.format('MM/DD/YY');
            let d5 = document.createElement('li');
            d5.textContent = date5.format('MM/DD/YY');
            let rW1 = document.createElement('li');
            rW1.textContent ='Conditions: ' + weather1;
            rW1.append(i1);
            let rW2 = document.createElement('li');
            rW2.textContent ='Conditions: ' + weather2;
            rW2.append(i2);
            let rW3 = document.createElement('li');
            rW3.textContent ='Conditions: ' + weather3;
            rW3.append(i3);
            let rW4 = document.createElement('li');
            rW4.textContent ='Conditions: ' + weather4;
            rW4.append(i4);
            let rW5 = document.createElement('li');
            rW5.textContent ='Conditions: ' + weather5;
            rW5.append(i5);
            let rT1 = document.createElement('li');
            rT1.textContent ='Temp: ' + temp1;
            let rT2 = document.createElement('li');
            rT2.textContent ='Temp: ' + temp2;
            let rT3 = document.createElement('li');
            rT3.textContent ='Temp: ' + temp3;
            let rT4 = document.createElement('li');
            rT4.textContent ='Temp: ' + temp4;
            let rT5 = document.createElement('li');
            rT5.textContent ='Temp: ' + temp5;
            let rWi1 = document.createElement('li');
            rWi1.textContent ='Wind: ' + wind1 + 'mph';
            let rWi2 = document.createElement('li');
            rWi2.textContent ='Wind: ' + wind2 + 'mph';
            let rWi3 = document.createElement('li');
            rWi3.textContent ='Wind: ' + wind3 + 'mph';
            let rWi4 = document.createElement('li');
            rWi4.textContent ='Wind: ' + wind4 + 'mph';
            let rWi5 = document.createElement('li');
            rWi5.textContent ='Wind: ' + wind5 + 'mph';
            let rH1 = document.createElement('li');
            rH1.textContent ='Humidity: ' + humid1;
            let rH2 = document.createElement('li');
            rH2.textContent ='Humidity: ' + humid2;
            let rH3 = document.createElement('li');
            rH3.textContent ='Humidity: ' + humid3;
            let rH4 = document.createElement('li');
            rH4.textContent ='Humidity: ' + humid4;
            let rH5 = document.createElement('li');
            rH5.textContent ='Humidity: ' + humid5;
            
            let first = document.createElement('ul');
            first.className = 'col-2 list-group m-1';
            let second = document.createElement('ul');
            second.className = 'col-2 list-group m-1';
            let third = document.createElement('ul');
            third.className = 'col-2 list-group m-1';
            let fourth = document.createElement('ul');
            fourth.className = 'col-2 list-group m-1'; 
            let fifth = document.createElement('ul');
            fifth.className = 'col-2 list-group m-1';

            first.append(d1, rW1,rT1,rWi1,rH1);
            first.id = 'first';
            second.append(d2, rW2,rT2,rWi2,rH2);
            third.append(d3, rW3,rT3,rWi3,rH3);
            fourth.append(d4, rW4,rT4,rWi4,rH4);
            fifth.append(d5, rW5,rT5,rWi5,rH5);
            
            results.style.display = 'block';
            title.style.display = 'block';
            day5.append(first,second,third,fourth,fifth);
        })
      })



}
function searchButton(event) {
    event.preventDefault();
    let citySel = document.getElementById('citySearch').value;
    callWeather(citySel);
    return;
}
function cityButton(event) {
    event.preventDefault();
    
    let citySel = event.target.id;
    callWeather(citySel);
    prev.removeChild(event.target);
    return;
}

prev.addEventListener('click', cityButton);
weatherSearch.addEventListener('submit', searchButton);